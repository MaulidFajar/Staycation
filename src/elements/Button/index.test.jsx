
import {render} from "@testing-library/react";
import { expect, test } from 'vitest'; 
import Button from './index';
import { BrowserRouter as Router } from 'react-router-dom'


test("should not allowed click button if isDisabled is present", () => {
  const{container} = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should have a loading text and spinner in span if isLoading is present", () => {
  const {container, getByText} = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const {container} = render(<Button isExternal type='link'></Button>);

  expect(container.querySelector('a')).toBeInTheDocument();
});

test("should render <Link> component", () => {
  const {container} = render(<Router><Button href='' type="link"></Button></Router>)

  expect(container.querySelector("a")).toBeInTheDocument();
})