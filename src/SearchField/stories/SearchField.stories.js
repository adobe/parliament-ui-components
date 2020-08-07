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
import Bug from '@spectrum-icons/workflow/Bug'
import { SearchField } from '../index'

export default {
  title: 'components/SearchField'
}

export const Default = () => {
  const props = {
    onSubmit: (searchTerm) => {
      console.log(searchTerm)
    }
  }

  return <SearchField {...props} />
}

export const LabelAndPlaceholder = () => {
  const props = {
    onSubmit: (searchTerm) => {
      console.log(searchTerm)
    },
    label: 'Search',
    placeholder: 'search field'
  }

  return <SearchField {...props} />
}

export const ReplaceIcon = () => {
  const props = {
    onSubmit: (searchTerm) => {
      console.log(searchTerm)
    },
    icon: <Bug size='S' />
  }

  return <SearchField {...props} />
}

export const Disabled = () => {
  const props = {
    onSubmit: (searchTerm) => {
      console.log(searchTerm)
    },
    isDisabled: true
  }

  return <SearchField {...props} />
}

export const Quiet = () => {
  const props = {
    onSubmit: (searchTerm) => {
      console.log(searchTerm)
    },
    isQuiet: true
  }

  return <SearchField {...props} />
}

export const WithValue = () => {
  const props = {
    onSubmit: (searchTerm) => {
      console.log(searchTerm)
    },
    value: 'my value'
  }

  return <SearchField {...props} />
}

export const OnSubmit = () => {
  const props = {
    onSubmit: (searchTerm) => {
      window.alert(searchTerm)
    }
  }

  return <SearchField {...props} />
}

export const OnChange = () => {
  const props = {
    onChange: (searchTerm) => {
      console.log(searchTerm)
    }
  }

  return <SearchField {...props} />
}

export const OnClear = () => {
  const props = {
    onClear: () => {
      window.alert('Cleared!')
    }
  }

  return <SearchField {...props} />
}
