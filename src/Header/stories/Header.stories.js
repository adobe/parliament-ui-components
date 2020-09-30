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

import { Header } from '../index'

export default {
  title: 'components/Header'
}

const Menu = () => <div>This is a dummy menu</div>

export const Default = () => {
  const props = {
    menu: <Menu />
  }

  return <Header {...props} />
}

export const WithSiteTitle = () => {
  const props = {
    menu: <Menu />,
    siteTitle: 'My Test Site'
  }

  return <Header {...props} />
}

export const DifferentIcon = () => {
  const props = {
    menu: <Menu />,
    siteTitle: 'My Test Site',
    icon: (
      <img
        style={{ height: 32, marginRight: 8 }}
        src='https://www.adobe.com/content/dam/offers-homepage/us/en/homepage/profilepod/cc.png.img.png'
      />
    )
  }

  return <Header {...props} />
}

export const NoMenu = () => {
  const props = {
    siteTitle: 'My Test Site'
  }

  return <Header {...props} />
}
