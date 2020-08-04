/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import React from 'react'

import classNames from 'classnames'

import '@spectrum-css/table'

const Table = ({ children, isQuiet, className, ...props }) => {
  return (
    <table
      className={classNames(className, [
        'spectrum-Table',
        { 'spectrum-Table--quiet': isQuiet }
      ])}
      {...props}
    >
      {children}
    </table>
  )
}

const THead = ({ children, className }) => {
  return (
    <thead className={classNames(className, ['spectrum-Table-head'])}>
      {children}
    </thead>
  )
}

const Th = ({ children, className }) => {
  return (
    <th className={classNames(className, ['spectrum-Table-headCell'])}>
      {children}
    </th>
  )
}

const TBody = ({ children, className }) => {
  return (
    <tbody className={classNames(className, ['spectrum-Table-body'])}>
      {children}
    </tbody>
  )
}

const Tr = ({ children, className }) => {
  return (
    <tr className={classNames(className, ['spectrum-Table-row'])}>
      {children}
    </tr>
  )
}

const Td = ({ children, className }) => {
  return (
    <td className={classNames(className, ['spectrum-Table-cell'])}>
      {children}
    </td>
  )
}

export { Table, THead, Th, TBody, Tr, Td }
