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
import PropTypes from 'prop-types'
import { parse } from 'node-html-parser'
import { Heading } from '@react-spectrum/text'

const stripOuterH1 = function (toc) {
  let html = ''
  const root = parse(toc)
  console.log(root)
  const headerOneList = root.querySelector('ul')
  if (headerOneList) {
    const headerTwoList = headerOneList.querySelector('ul')
    if (headerTwoList) {
      html = headerTwoList.toString()
    }
  }
  return html
}

/*
const createToC = (tableOfContents, maxDepth, stripH1) => {
  const depth = 1
  const root = parse(tableOfContents)
}
*/

const TableOfContents = ({ tableOfContents, depth, stripH1 }) => {
  // Removing the H1 from the ToC
  const html = stripH1 ? stripOuterH1(tableOfContents) : tableOfContents
  return (
    <div
      style={{
        height: '70vh',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <Heading level={5}>On this page</Heading>
      <span className='toc' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

TableOfContents.propTypes = {
  tableOfContents: PropTypes.string,
  depth: PropTypes.number,
  stripH1: PropTypes.bool
}

TableOfContents.defaultProps = {
  tableOfContents: '',
  depth: 2,
  stripH1: true
}
export default TableOfContents
