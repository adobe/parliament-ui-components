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
import Header from './Header'
import Footer from './Footer'
import ActionButtons from './ActionButtons'
import Nav from './Nav'
import Next from './Next'
import Prev from './Prev'
import TableOfContents from './TableOfContents'
import Contributors from './Contributors'
import Alert from './Alert'
import { stripManifestPath, defaultFocus } from './ManifestUtils'

const manifest = {
  author: 'Nathan Price',
  base_path: 'https://raw.githubusercontent.com',
  description: 'Analytics',
  meta_description: 'default description',
  meta_keywords: 'adobe, analytics',
  name: 'Analytics',
  pages: [
    {
      importedFileName: 'readme',
      pages: [],
      path: 'AdobeDocs/analytics-1.4-apis/master/README.md',
      title: 'Overview'
    },
    {
      importedFileName: 'getting-started-2',
      pages: [
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/reporting-api/index.md',
          title: 'Reporting API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: 'AdobeDocs/analytics-1.4-apis/master/docs/admin-api/index.md',
          title: 'Admin API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/live-stream-api/index.md',
          title: 'Live Stream'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/data-feeds-api/index.md',
          title: 'Data Feeds'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/data-sources-api/index.md',
          title: 'Data Sources'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/data-insertion-api/index.md',
          title: 'Data Insertion'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/data-warehouse-api/index.md',
          title: 'Data Warehouse'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/classifications-api/index.md',
          title: 'Classifications'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/calc-metrics-api/index.md',
          title: 'Calculated Metrics'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/segments-api/index.md',
          title: 'Segments'
        },
        {
          importedFileName: 'jwt',
          pages: [],
          path: 'AdobeDocs/analytics-1.4-apis/master/jwt.md',
          title: 'JWT Authentication'
        }
      ],
      path:
        'AdobeDocs/analytics-1.4-apis/blob/master/docs/getting-started/getting-started-2.md',
      title: 'Getting Started'
    },
    {
      importedFileName: 'index',
      pages: [
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/recommendations-api/index.md',
          title: 'Legacy Recommendations API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: 'AdobeDocs/analytics-1.4-apis/master/docs/target-api/index.md',
          title: 'Legacy Target API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: 'AdobeDocs/analytics-1.4-apis/master/docs/saint-api/index.md',
          title: 'Legacy Saint API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/reporting-api-1.3/index.md',
          title: 'Legacy Reporting API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/admin-api-1.3/index.md',
          title: 'Legacy Admin API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path:
            'AdobeDocs/analytics-1.4-apis/master/docs/authentication/index.md',
          title: 'Legacy Authentication'
        }
      ],
      path: 'AdobeDocs/analytics-1.4-apis/docs/APIEOL.md',
      title: 'Legacy 1.3 APIs'
    }
  ],
  publish_date: '11/11/2019',
  show_edit_github_banner: false,
  version: '2.0.0',
  view_type: 'mdbook'
}

describe('Header', () => {
  it('is truthy', () => {
    expect(Header).toBeTruthy()
  })
})

describe('Footer', () => {
  it('is truthy', () => {
    expect(Footer).toBeTruthy()
  })
})

describe('ActionButtons', () => {
  it('is truthy', () => {
    expect(ActionButtons).toBeTruthy()
  })
})

describe('Nav', () => {
  it('is truthy', () => {
    expect(Nav).toBeTruthy()
  })
})

describe('Next', () => {
  it('is truthy', () => {
    expect(Next).toBeTruthy()
  })
})

describe('Prev', () => {
  it('is truthy', () => {
    expect(Prev).toBeTruthy()
  })
})

describe('TableOfContents', () => {
  it('is truthy', () => {
    expect(TableOfContents).toBeTruthy()
  })
})

describe('Contributors', () => {
  it('is truthy', () => {
    expect(Contributors).toBeTruthy()
  })
})

describe('Alert', () => {
  it('is truthy', () => {
    expect(Alert).toBeTruthy()
  })
})

describe('stripManifestPath', () => {
  it('is truthy', () => {
    expect(stripManifestPath).toBeTruthy()
  })
  it('empty to return empty', () => {
    expect(stripManifestPath('', { org: 'fake', name: 'path' })).toEqual('')
  })
  it('lower case to work', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md', {
        org: 'adobedocs',
        name: 'adobeio-events',
        branch: 'master'
      })
    ).toEqual('/using.md')
  })
  it('upper case to work', () => {
    expect(
      stripManifestPath('AdobeDocs/adobeio-events/master/using.md', {
        org: 'AdobeDocs',
        name: 'adobeio-events',
        branch: 'master'
      })
    ).toEqual('/using.md')
  })
  it('mixed case to work', () => {
    expect(
      stripManifestPath('AdobeDocs/adobeio-events/master/using.md', {
        org: 'adobedocs',
        name: 'adobeio-events',
        branch: 'master'
      })
    ).toEqual('/using.md')
  })
  it('reversed mixed case to work', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md', {
        org: 'AdobeDocs',
        name: 'adobeio-events',
        branch: 'master'
      })
    ).toEqual('/using.md')
  })
  it('no url prefix to leave path unchanged', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md', {})
    ).toEqual('adobedocs/adobeio-events/master/using.md')
  })
  it('undefined url prefix to leave path unchanged', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md')
    ).toEqual('adobedocs/adobeio-events/master/using.md')
  })
  it('only repo name is in manifest path all options', () => {
    expect(
      stripManifestPath('stock-api-docs/docs/01-getting-started.md', {
        org: 'adobe',
        name: 'stock-api-docs',
        branch: 'master'
      })
    ).toEqual('/docs/01-getting-started.md')
  })
  it('only repo name is in manifest path missing org', () => {
    expect(
      stripManifestPath('stock-api-docs/docs/01-getting-started.md', {
        name: 'stock-api-docs',
        branch: 'master'
      })
    ).toEqual('/docs/01-getting-started.md')
  })
  it('only repo name is in manifest path missing branch', () => {
    expect(
      stripManifestPath('stock-api-docs/docs/01-getting-started.md', {
        org: 'adobe',
        name: 'stock-api-docs'
      })
    ).toEqual('/docs/01-getting-started.md')
  })
  it('only repo name is in manifest path missing org and branch', () => {
    expect(
      stripManifestPath('stock-api-docs/docs/01-getting-started.md', {
        name: 'stock-api-docs'
      })
    ).toEqual('/docs/01-getting-started.md')
  })
  it('remote link with org in url', () => {
    expect(
      stripManifestPath('https://adobe.io/authentication', {
        org: 'adobe',
        name: 'stock-api-docs',
        branch: 'master'
      })
    ).toEqual('https://adobe.io/authentication')
  })
  it('remote link without org in url', () => {
    expect(
      stripManifestPath('https://adobe.io/authentication', {
        org: 'adobedocs',
        name: 'stock-api-docs',
        branch: 'master'
      })
    ).toEqual('https://adobe.io/authentication')
  })
})

describe('defaultFocus', () => {
  it('is truthy', () => {
    expect(defaultFocus).toBeTruthy()
  })
  it('org/name/branch', () => {
    const result = defaultFocus(
      manifest,
      'http://docs.corp.adobe.com/authentication/adobe-io/docs/reporting-api/index.md',
      { org: 'AdobeDocs', name: 'analytics-1.4-apis', branch: 'master' }
    )
    expect(result === 'Reporting API').toBe(true)
  })
  it('org/name', () => {
    const result = defaultFocus(
      manifest,
      'http://docs.corp.adobe.com/authentication/adobe-io/docs/docs/APIEOL.md',
      { org: 'AdobeDocs', name: 'analytics-1.4-apis', branch: 'master' }
    )
    expect(result === 'Legacy 1.3 APIs').toBe(true)
  })
  it('deep in strucure', () => {
    const result = defaultFocus(
      manifest,
      'http://docs.corp.adobe.com/authentication/adobe-io/docs/authentication/index.md',
      { org: 'AdobeDocs', name: 'analytics-1.4-apis', branch: 'master' }
    )
    expect(result === 'Legacy Authentication').toBe(true)
  })
})
