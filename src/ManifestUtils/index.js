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
import { withPrefix } from 'gatsby'

function stripManifestPath(path, { org = '', name = '', branch = '' } = {}) {
  if (!path) {
    return ''
  }
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    (org === '' && name === '' && branch === '')
  ) {
    return path
  }
  const prefix = [org, name, branch]
  const splitPath = path.split('/').filter((item) => item !== '')

  prefix.map((item) => {
    if (item.toLocaleLowerCase() === splitPath[0].toLocaleLowerCase()) {
      splitPath.shift()
    }
  })

  return '/' + splitPath.join('/')
}

function defaultFocus(theObject, selected, urlPrefix) {
  var result = null
  if (theObject instanceof Array) {
    for (var i = 0; i < theObject.length; i++) {
      result = defaultFocus(theObject[i], selected, urlPrefix)
      if (result) {
        break
      }
    }
  } else {
    for (var prop in theObject) {
      if (prop === 'path') {
        const updatedPath = stripManifestPath(theObject[prop], urlPrefix)
        if (
          updatedPath &&
          withPrefix(updatedPath).toLowerCase().endsWith(selected.toLowerCase())
        ) {
          return theObject.title
        }
      }
      if (
        theObject[prop] instanceof Object ||
        theObject[prop] instanceof Array
      ) {
        result = defaultFocus(theObject[prop], selected, urlPrefix)
        if (result) {
          break
        }
      }
    }
  }
  return result
}

export { stripManifestPath, defaultFocus }
