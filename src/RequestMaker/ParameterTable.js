/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react'
import { Grid, TextField, View } from '@adobe/react-spectrum'
import PropTypes from 'prop-types'

const TableCell = ({ head = false, children }) => (
  <View
    UNSAFE_className={head ? 'spectrum-Table-headCell' : 'spectrum-Table-cell'}
    borderBottomWidth='thin'
    borderColor='dark'
  >
    {children}
  </View>
)

const TableCellHead = ({ children }) => <TableCell head>{children}</TableCell>

const ParameterTable = ({ readonly = false, items }) => {
  console.log(items)

  const rows = items.map(({ key, value }) =>
    readonly ? (
      <>
        <TableCell />
        <TableCell>{key}</TableCell>
        <TableCell>{value}</TableCell>
        <TableCell />
      </>
    ) : (
      <>
        <TableCell />
        <TableCell>
          <TextField isQuiet value={key} />
        </TableCell>
        <TableCell>
          <TextField isQuiet value={value} />
        </TableCell>
        <TableCell />
      </>
    )
  )

  return (
    <Grid
      columns={['size-500', '1fr', '1fr', 'size-500']}
      autoRows='size-500'
      UNSAFE_className='spectrum-Table'
    >
      <TableCellHead />
      <TableCellHead>Key</TableCellHead>
      <TableCellHead>Value</TableCellHead>
      <TableCellHead />
      {rows}
    </Grid>
  )
}

ParameterTable.propTypes = {
  name: PropTypes.string.isRequired
}

export { ParameterTable }
