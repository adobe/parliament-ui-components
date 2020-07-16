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
import { Link } from 'gatsby'

import { Heading } from '@react-spectrum/text'

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: '#2f2c2c',
        marginBottom: '1.45rem'
      }}
    >
      <div
        style={{
          margin: '0 auto',
          padding: '1.45rem 1.0875rem'
        }}
      >
        <Heading style={{ margin: 0 }}>
          <Link
            to='/'
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
