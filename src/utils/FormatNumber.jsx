/* eslint-disable no-unused-vars */
import React from 'react'

export default function FormatNumber(number) {
   const formatNumbering = new Intl.NumberFormat('en-US');
   return formatNumbering.format(number)
}
