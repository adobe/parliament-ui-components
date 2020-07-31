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
const mockData = {
  regular: {
    items: [
      {
        url: '#step-2-add-templates',
        title: 'Step 2: Add templates',
        items: [
          {
            url: '#template-conventions',
            title: 'Template conventions'
          },
          {
            url: '#template-configuration',
            title: 'Template configuration'
          },
          {
            url: '#quote-preview_template',
            title: 'Quote preview_template',
            items: [
              {
                url: '#attr',
                title: 'Attributes'
              },
              {
                url: '#ko-style',
                title: 'KO-Styles'
              },
              {
                url: '#css',
                title: 'CSS'
              },
              {
                url: '#class',
                title: 'Class'
              },
              {
                url: '#liveedit',
                title: 'LiveEdit'
              },
              {
                url: '#event',
                title: 'Event'
              }
            ]
          },
          {
            url: '#quote-master_template',
            title: 'Quote master_template',
            items: [
              {
                url: '#html',
                title: 'Html'
              }
            ]
          },
          {
            url: '#next',
            title: 'Next'
          }
        ]
      }
    ]
  },
  twoH1s: {
    items: [
      {
        url: '#Heading 1',
        title: 'Step 3: Add components (optional)'
      },
      {
        url: '#Another Heading 1',
        title: 'Step 3: Add components (optional)'
      },
      {
        url: '#And Yet Another Heading 1',
        title: 'Another Heading1',
        items: [
          {
            url: '#about-components',
            title: 'About components'
          },
          {
            url: '#component-conventions',
            title: 'Component conventions'
          },
          {
            url: '#component-configuration',
            title: 'Component configuration'
          },
          {
            url: '#quote-preview_component',
            title: 'Quote preview_component',
            items: [
              {
                url: '#extend-from-preview',
                title: 'Extend from Preview'
              },
              {
                url: '#customize-the-options-menu',
                title: 'Customize the options menu'
              }
            ]
          },
          {
            url: '#quote-master_component',
            title: 'Quote master_component'
          },
          {
            url: '#next',
            title: 'Next'
          }
        ]
      }
    ]
  }
}

export default mockData
