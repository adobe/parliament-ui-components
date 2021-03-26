/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import React from 'react'
import { RequestMaker, RequestBody, Parameter, Headers, Query } from '../index'

export default {
  title: 'components/RequestMaker'
}

export const RequestMakerDefault = () => {
  const props = {
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  return (
    <RequestMaker {...props}>
      <Headers>
        <Parameter name='one'>header one</Parameter>
        <Parameter name='two'>header two</Parameter>
      </Headers>
      <Query>
        <Parameter name='one'>query one</Parameter>
        <Parameter name='two'>query two</Parameter>
      </Query>
      <RequestBody type='raw'>This is my body</RequestBody>
    </RequestMaker>
  )
}

export const RequestMakerNoBody = () => {
  const props = {
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  return (
    <RequestMaker {...props}>
      <Headers>
        <Parameter name='one'>header one</Parameter>
        <Parameter name='two'>header two</Parameter>
      </Headers>
      <Query>
        <Parameter name='one'>query one</Parameter>
        <Parameter name='two'>query two</Parameter>
      </Query>
    </RequestMaker>
  )
}

export const RequestMakerPropParameters = () => {
  const props = {
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  const headers = [
    {
      enabled: true,
      key: 'one',
      value: 'header one',
      deletable: true
    },
    {
      enabled: true,
      key: 'two',
      value: 'header two',
      deletable: true
    }
  ]

  const query = [
    {
      enabled: true,
      key: 'one',
      value: 'query one',
      deletable: true
    },
    {
      enabled: true,
      key: 'two',
      value: 'query two',
      deletable: true
    }
  ]

  return (
    <RequestMaker {...props}>
      <Headers parameters={headers} />
      <Query parameters={query} />
      <RequestBody type='raw'>This is my body</RequestBody>
    </RequestMaker>
  )
}

export const RequestMakerPropAndNamedParameters = () => {
  const props = {
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  const headers = [
    {
      enabled: true,
      key: 'one',
      value: 'header one',
      deletable: true
    },
    {
      enabled: true,
      key: 'two',
      value: 'header two',
      deletable: true
    }
  ]

  const query = [
    {
      enabled: true,
      key: 'one',
      value: 'query one',
      deletable: true
    },
    {
      enabled: true,
      key: 'two',
      value: 'query two',
      deletable: true
    }
  ]

  return (
    <RequestMaker {...props}>
      <Headers parameters={headers}>
        <Parameter name='three'>header three</Parameter>
        <Parameter name='four'>header four</Parameter>
      </Headers>
      <Query parameters={query}>
        <Parameter name='three'>query three</Parameter>
        <Parameter name='four'>query four</Parameter>
      </Query>
      <RequestBody type='raw'>This is my body</RequestBody>
    </RequestMaker>
  )
}

export const RequestMakerDefaultMethod = () => {
  const props = {
    defaultMethod: 'POST',
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  return (
    <RequestMaker {...props}>
      <Headers>
        <Parameter name='one'>header one</Parameter>
        <Parameter name='two'>header two</Parameter>
      </Headers>
      <Query>
        <Parameter name='one'>query one</Parameter>
        <Parameter name='two'>query two</Parameter>
      </Query>
      <RequestBody type='raw'>This is my body</RequestBody>
    </RequestMaker>
  )
}

export const RequestMakerMethodsString = () => {
  const props = {
    methods: 'OPTIONS',
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  return (
    <RequestMaker {...props}>
      <Headers>
        <Parameter name='one'>header one</Parameter>
        <Parameter name='two'>header two</Parameter>
      </Headers>
      <Query>
        <Parameter name='one'>query one</Parameter>
        <Parameter name='two'>query two</Parameter>
      </Query>
      <RequestBody type='raw'>This is my body</RequestBody>
    </RequestMaker>
  )
}

export const RequestMakerMethodsStringArray = () => {
  const props = {
    methods: 'OPTIONS, GET, DELETE',
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  return (
    <RequestMaker {...props}>
      <Headers>
        <Parameter name='one'>header one</Parameter>
        <Parameter name='two'>header two</Parameter>
      </Headers>
      <Query>
        <Parameter name='one'>query one</Parameter>
        <Parameter name='two'>query two</Parameter>
      </Query>
      <RequestBody type='raw'>This is my body</RequestBody>
    </RequestMaker>
  )
}

export const RequestMakerMethodsArray = () => {
  const props = {
    methods: ['HEAD', 'PATCH', 'DELETE'],
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  return (
    <RequestMaker {...props}>
      <Headers>
        <Parameter name='one'>header one</Parameter>
        <Parameter name='two'>header two</Parameter>
      </Headers>
      <Query>
        <Parameter name='one'>query one</Parameter>
        <Parameter name='two'>query two</Parameter>
      </Query>
      <RequestBody type='raw'>This is my body</RequestBody>
    </RequestMaker>
  )
}

export const RequestMakerMethodsArrayWithDefault = () => {
  const props = {
    defaultMethod: 'PATCH',
    methods: ['HEAD', 'PATCH', 'DELETE'],
    url:
      'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }
  const items = [
    {enabled: true, key: 'test', value: 'rest'}
  ]

  return (
    <RequestMaker {...props}>
      <Headers>
        <Parameter name='one'>header one</Parameter>
        <Parameter name='two'>header two</Parameter>
      </Headers>
      <Query>
        <Parameter name='one'>query one</Parameter>
        <Parameter name='two'>query two</Parameter>
      </Query>
      <RequestBody type='urlencoded'>
        {items}
      </RequestBody>
    </RequestMaker>
  )
}
