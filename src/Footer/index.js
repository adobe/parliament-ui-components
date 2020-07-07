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

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div
      style={{
        flexBasis: '100%',
        maxWidth: '100%',
        padding: '0px 8px'
      }}
    >
      <footer style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', margin: '0 auto', fontSize: '11px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              float: 'right',
              padding: '8px !important'
            }}
          >
            <ul style={{ listStyle: 'none' }}>
              <li
                style={{
                  display: 'inline'
                }}
              >
                Copyright © {year} Adobe. All rights reserved. /{' '}
              </li>
              <li
                style={{
                  display: 'inline'
                }}
              >
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'color .1s ease,fill .1s ease'
                  }}
                  href='https://www.adobe.com/privacy.html'
                >
                  Privacy
                </a>{' '}
                /{' '}
              </li>
              <li
                style={{
                  display: 'inline'
                }}
              >
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'color .1s ease,fill .1s ease'
                  }}
                  href='https://www.adobe.com/legal/terms.html'
                >
                  Terms of Use
                </a>{' '}
                /{' '}
              </li>
              <li
                style={{
                  display: 'inline'
                }}
              >
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'color .1s ease,fill .1s ease'
                  }}
                  href='https://www.adobe.com/privacy/cookies.html'
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
