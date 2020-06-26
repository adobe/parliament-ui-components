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
