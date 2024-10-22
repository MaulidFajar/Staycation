/* eslint-disable no-unused-vars */
import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'


export default function Button(props) {
  const className = [props.className];
  if(props.isPrimary) className.push('btn-primary');
  if(props.isLarge) className.push('btn-lg'); 
  if(props.isSmall) className.push('btn-sm'); 
  if(props.isBlock) className.push('btn-block'); 
  if(props.hasShadow) className.push('btn-shadow');

  const onClickFunc = () => {
    if(props.onClickFunc) props.onCLick();
  }

  if(props.isDisabled || props.isLoading) {
    if(props.isDisabled) className.push('disabled')
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (props.children)}
      </span>
    )
  }

  if(props.type === 'link') {
    if(props.isExternal) {
      return (
        <a href={props.href} className={className.join(" ")} style={props.style} target={props.target === '_blank' ? '_blank' : undefined} rel={props.target === '_blank' ? 'noopener nooferrer' : undefined}>
        {props.children}
      </a>
      )
    } else {
      return (
        <Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClickFunc}>{props.children}</Link>
      )
    }
  }

  return (
    <>
      <button className={className.join(" ")} style={props.style} onClick={onClickFunc}>
        {props.children}
      </button>
    </>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClickFunc: propTypes.func,
  onCLick: propTypes.func,
  target: propTypes.string,
  children: propTypes.node,
  href: propTypes.string,
  className: propTypes.string,
  style: propTypes.string,
  isPrimary: propTypes.bool,
  isDisabled: propTypes.bool,
  isExternal: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
}