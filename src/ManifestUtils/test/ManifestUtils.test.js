/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http:www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { defaultFocus } from '../index'

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
      path: '/README.md',
      title: 'Overview'
    },
    {
      importedFileName: 'readme',
      pages: [],
      path: '/Overview.md',
      title: 'Overview Top Level'
    },
    {
      importedFileName: 'getting-started-2',
      pages: [
        {
          importedFileName: 'readme',
          pages: [],
          path: '/docs/Overview.md',
          title: 'Overview Getting Started'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/reporting-api/index.md',
          title: 'Reporting API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/admin-api/index.md',
          title: 'Admin API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/live-stream-api/index.md',
          title: 'Live Stream'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/data-feeds-api/index.md',
          title: 'Data Feeds'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/data-sources-api/index.md',
          title: 'Data Sources'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/data-insertion-api/index.md',
          title: 'Data Insertion'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/data-warehouse-api/index.md',
          title: 'Data Warehouse'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/classifications-api/index.md',
          title: 'Classifications'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/calc-metrics-api/index.md',
          title: 'Calculated Metrics'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/segments-api/index.md',
          title: 'Segments'
        },
        {
          importedFileName: 'jwt',
          pages: [],
          path: '/jwt.md',
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
          path: '/docs/recommendations-api/index.md',
          title: 'Legacy Recommendations API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/target-api/index.md',
          title: 'Legacy Target API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/saint-api/index.md',
          title: 'Legacy Saint API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/reporting-api-1.3/index.md',
          title: 'Legacy Reporting API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/admin-api-1.3/index.md',
          title: 'Legacy Admin API'
        },
        {
          importedFileName: 'index',
          pages: [],
          path: '/docs/authentication/index.md',
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

describe('defaultFocus', () => {
  it('is truthy', () => {
    expect(defaultFocus).toBeTruthy()
  })
  it('org/name/branch', () => {
    const result = defaultFocus(manifest, '/docs/reporting-api/index.md')
    expect(result === 'Reporting API').toBe(true)
  })
  it('org/name', () => {
    const result = defaultFocus(manifest, '/docs/APIEOL.md')
    expect(result === 'Legacy 1.3 APIs').toBe(true)
  })
  it('deep in strucure', () => {
    const result = defaultFocus(manifest, '/docs/authentication/index.md')
    expect(result === 'Legacy Authentication').toBe(true)
  })
  it('top level overview', () => {
    const result = defaultFocus(manifest, '/Overview.md')
    expect(result === 'Overview Top Level').toBe(true)
  })
  it('deep level overview', () => {
    const result = defaultFocus(manifest, '/docs/Overview.md')
    expect(result === 'Overview Getting Started').toBe(true)
  })
})
