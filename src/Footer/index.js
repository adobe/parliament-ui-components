import React from 'react'

const Footer = () => (
  <React.Fragment>
    <link
      rel='stylesheet'
      href='https://www.adobe.io/etc.clientlibs/dexter/clientlibs/base/publish.css'
      type='text/css'
    />
    <link
      rel='stylesheet'
      href='https://www.adobe.io/etc.clientlibs/dexter/clientlibs/base/theme.css'
      type='text/css'
    />
    <link
      rel='stylesheet'
      href='https://www.adobe.io/etc.clientlibs/udp/clientlibs/base/theme.css'
      type='text/css'
    />
    <link
      rel='stylesheet'
      href='https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css'
    />
    <div className='udp footerr aem-GridColumn aem-GridColumn--default--12 footer'>
      <footer className='udpFooter'>
        <div className='grid-container'>
          <div className='footer-content'>
            <ul className='footer-columns'>
              <li className='footer-column'>
                <a href='javascript:void(0);' className='bloc-header'>
                  APIs
                </a>
                <div className='bloc-content'>
                  <ul className='bloc-elements'>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.io/apis/creativecloud.html'
                      >
                        Creative Cloud
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.io/apis/documentcloud.html'
                      >
                        Document Cloud
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.io/apis/experiencecloud.html'
                      >
                        Experience Cloud
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.io/apis/experienceplatform.html'
                      >
                        Adobe Experience Platform
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='footer-column social-column'>
                <a className='bloc-header' href='javascript:void(0);'>
                  Blogs and Community
                </a>
                <div className='bloc-content'>
                  <ul className='bloc-elements bloc-social'>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://medium.com/adobetech'
                      >
                        Adobe Tech Blog
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://github.com/adobe'
                      >
                        Adobe on Github
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://twitter.com/AdobeIO'
                      >
                        Adobe I/O on Twitter
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.youtube.com/channel/UCDtYqOjS9Eq9gacLcbMwhhQ'
                      >
                        Adobe I/O on YouTube
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='footer-column'>
                <a className='bloc-header' href='javascript:void(0);'>
                  Support
                </a>
                <div className='bloc-content'>
                  <ul className='bloc-elements'>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.io/contactus.html'
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.io/support'
                      >
                        Adobe Developer Support
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://helpx.adobe.com/contact/enterprise-support.html?promoid=9MZL4DLJ&mv=other'
                      >
                        Adobe Product Support
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.io/releasenotes.html'
                      >
                        Release Notes
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://forums.adobe.com/community/adobe-io'
                      >
                        Forums
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='footer-column'>
                <a className='bloc-header' href='javascript:void(0);'>
                  Adobe
                </a>
                <div className='bloc-content'>
                  <ul className='bloc-elements'>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.io/open.html'
                      >
                        Open Source Adobe
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.com/privacy.html'
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.com/legal/terms.html'
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className='bloc-element'>
                      <a
                        className='footer-link'
                        href='https://www.adobe.com/privacy/cookies.html'
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className='footer-copyright'>
            <p>Copyright &copy; 2019 Adobe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </React.Fragment>
)

export default Footer
