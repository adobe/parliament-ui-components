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
import { Contributors } from '../index'

export default {
  title: 'components/Contributors'
}

const contributors = [
  {
    name: 'Stephan Ringel',
    login: 'icaraps',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/6012307'
  },
  {
    name: 'Simon MacDonald',
    login: 'macdonst',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/353180'
  },
  {
    name: 'James Calcaben',
    login: 'jcalcaben',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/4692281'
  },
  {
    name: 'Shazron Abdullah',
    login: 'shazron',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/36107'
  },
  {
    name: 'Simon Wex',
    login: 'simonwex',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/25260'
  },
  {
    name: 'Hiren Shah',
    login: 'hirenoble',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/3747836'
  }
]

export const OneCommitter = () => {
  const props = {
    contributors: contributors.slice(0, 1),
    date: 'May 20, 2020',
    href: ''
  }

  return <Contributors {...props} />
}

export const ThreeCommitters = () => {
  const props = {
    contributors: contributors.slice(0, 3),
    date: 'May 20, 2020',
    href: ''
  }

  return <Contributors {...props} />
}

export const FiveCommitters = () => {
  const props = {
    contributors: contributors.slice(0, 5),
    date: 'May 20, 2020',
    href: ''
  }

  return <Contributors {...props} />
}

export const DontShowSixCommitter = () => {
  const props = {
    contributors: contributors,
    date: 'May 20, 2020',
    href: ''
  }

  return <Contributors {...props} />
}

export const InvalidImage = () => {
  const props = {
    contributors: [
      {
        name: 'Guy Incognito',
        login: 'incognito',
        avatarUrl: 'https://localhost:8000/nope'
      },
      ...contributors
    ],
    date: 'May 20, 2020',
    href: ''
  }

  return <Contributors {...props} />
}
