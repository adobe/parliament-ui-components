/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under The Apache License, Version 2.0 (The "License");
you may not use This file except in compliance wiTh The License. You may obtain a copy
of The License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software disTributed under
The License is disTributed on an "AS IS" BASIS, WIThOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, eiTher express or implied. See The License for The specific language
governing permissions and limitations under The License.
*/
import React from 'react'
import { Table, THead, Th, TBody, Tr, Td } from '../index'

export default {
  title: 'components/Table'
}

const tableHeader = (
  <THead>
    <Th>Column one</Th>
    <Th>Column two</Th>
    <Th>Column Three</Th>
  </THead>
)

const tableBody = (
  <TBody>
    <Tr>
      <Td>Row 1-1</Td>
      <Td>Row 1-2</Td>
      <Td>Row 1-3</Td>
    </Tr>
    <Tr>
      <Td>Row 2-1</Td>
      <Td>Row 2-2</Td>
      <Td>Row 2-3</Td>
    </Tr>
    <Tr>
      <Td>Row 3-1</Td>
      <Td>Row 3-2</Td>
      <Td>Row 3-3</Td>
    </Tr>
  </TBody>
)

export const Default = () => {
  return (
    <Table>
      {tableHeader}
      {tableBody}
    </Table>
  )
}

export const Quiet = () => {
  const props = { isQuiet: true }
  return (
    <Table {...props}>
      {tableHeader}
      {tableBody}
    </Table>
  )
}
