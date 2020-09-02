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
import { GlobalHeader } from '../index'
import { View } from '@react-spectrum/view'

export default {
  title: 'components/GlobalHeader'
}

const globalNav = {
  home: {
    title: 'Developer',
    path: 'https://adobe.io',
    logo: 'adobe'
  },
  menus: [
    {
      title: 'Discover',
      sections: [
        {
          heading: 'APIs',
          viewAll: {
            title: 'View all APIs',
            path: 'https://adobe.io'
          },
          divider: true,
          pages: [
            {
              title: 'Adobe XD',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Photoshop',
              path: 'https://adobe.io'
            },
            {
              title: 'Document Cloud View SDK',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Acrobat',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Target',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe I/O Runtime',
              path: 'https://adobe.io'
            },
            {
              title: 'Project Firefly',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe I/O Events',
              path: 'https://adobe.io'
            }
          ]
        },
        {
          heading: 'Solutions',
          pages: [
            {
              title: 'Adobe Creative Cloud',
              description:
                'Find out how to extend and develop on Creative Cloud apps',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Experience Platform',
              description:
                'Build and manage complete solutions that drive customer experience',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Document Cloud',
              description:
                "Build engaging digital document experiences with Adobe's cloud-based APIs",
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Creative Cloud',
              description:
                'Build and jargon words for Adobe Experience Cloud products and services',
              path: 'https://adobe.io'
            }
          ]
        }
      ]
    },
    {
      title: 'Docs',
      sections: [
        {
          viewAll: {
            title: 'View all docs',
            path: 'https://adobe.io'
          },
          pages: [
            {
              title: 'Adobe XD',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Photoshop',
              path: 'https://adobe.io'
            },
            {
              title: 'Document Cloud View SDK',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Acrobat',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Target',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe I/O Runtime',
              path: 'https://adobe.io'
            },
            {
              title: 'Project Firefly',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe I/O Events',
              path: 'https://adobe.io'
            }
          ]
        },
        {
          pages: [
            {
              title: 'Adobe XD',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Photoshop',
              path: 'https://adobe.io'
            },
            {
              title: 'Document Cloud View SDK',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Acrobat',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe Target',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe I/O Runtime',
              path: 'https://adobe.io'
            },
            {
              title: 'Project Firefly',
              path: 'https://adobe.io'
            },
            {
              title: 'Adobe I/O Events',
              path: 'https://adobe.io'
            }
          ]
        }
      ]
    }
  ]
}

const pages = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Guides',
    path: '/guides/'
  }
]

const location = {
  pathname: '/'
}

export const Default = () => {
  const globalNavCopy = { ...globalNav }
  globalNavCopy.menus = [globalNavCopy.menus[1]]

  return (
    <View position='fixed' height='size-800' left='0' right='0'>
      <GlobalHeader
        location={location}
        pages={pages}
        globalNav={globalNavCopy}
      />
    </View>
  )
}

export const WithMultipleMenus = () => {
  return (
    <View position='fixed' height='size-800' left='0' right='0'>
      <GlobalHeader location={location} pages={pages} globalNav={globalNav} />
    </View>
  )
}

export const WithDocs = () => {
  const globalNavCopy = { ...globalNav }
  globalNavCopy.menus = [globalNavCopy.menus[0]]

  const docs = {
    path: '/docs/'
  }

  return (
    <View position='fixed' height='size-800' left='0' right='0'>
      <GlobalHeader
        docs={docs}
        location={location}
        pages={pages}
        globalNav={globalNavCopy}
      />
    </View>
  )
}

export const WithConsoleAndSignIn = () => {
  return (
    <View position='fixed' height='size-800' left='0' right='0'>
      <GlobalHeader
        location={location}
        pages={pages}
        globalNav={globalNav}
        console
        signIn
      />
    </View>
  )
}

export const WithCustomLogo = () => {
  const globalNavCopy = { ...globalNav }
  globalNavCopy.home.logo = (
    <img
      style={{ height: 32, marginRight: 8 }}
      src='https://www.adobe.com/content/dam/offers-homepage/us/en/homepage/profilepod/cc.png.img.png'
    />
  )

  return (
    <View position='fixed' height='size-800' left='0' right='0'>
      <GlobalHeader
        location={location}
        pages={pages}
        globalNav={globalNavCopy}
      />
    </View>
  )
}
