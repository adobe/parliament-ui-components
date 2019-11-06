import React from 'react'

const Footer = () => (
  <React.Fragment>
    <footer style={{ padding: '0' }}>
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
              Copyright © 2019 Adobe. All rights reserved. /{' '}
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
  </React.Fragment>
)

export default Footer
