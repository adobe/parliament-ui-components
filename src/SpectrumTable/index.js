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

import '@spectrum-css/table'

const Table = ({ children }) => {
  return <table className='spectrum-Table'>{children}</table>
}

const THead = ({ children }) => {
  return <thead className='spectrum-Table-head'>{children}</thead>
}

const TH = ({ children }) => {
  return <th className='spectrum-Table-headCell'>{children}</th>
}

const TBody = ({ children }) => {
  return <tbody className='spectrum-Table-body'>{children}</tbody>
}

const TR = ({ children }) => {
  return <tr className='spectrum-Table-row'>{children}</tr>
}

const TD = ({ children }) => {
  return <td className='spectrum-Table-cell'>{children}</td>
}

export { Table, THead, TH, TBody, TR, TD }
