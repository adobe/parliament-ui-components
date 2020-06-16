/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Heading from '@react/react-spectrum/Heading'
import { parse } from 'node-html-parser'

const TableOfContents = ({ tableOfContents }) => {
  // Removing the H1 from the ToC
  let html = ''
  const root = parse(tableOfContents)
  const headerOneList = root.querySelector('ul')
  if (headerOneList) {
    const headerTwoList = headerOneList.querySelector('ul')
    html = headerTwoList.toString()
  }
  return (
    <div
      css={css`
        height: 70vh;
        overflow-y: auto;
        overflow-x: hidden;
      `}
    >
      <Heading variant='subtitle3'>On this page</Heading>
      <span className='toc' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default TableOfContents
