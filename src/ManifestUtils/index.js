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
function stripManifestPath(path, { org = '', name = '', branch = '' } = {}) {
  if (!path) {
    return ''
  }
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  let urlPrefix = ''
  if (org) {
    urlPrefix += org
  }
  if (name) {
    urlPrefix += urlPrefix !== '' ? '/' + name : name
  }
  if (branch) {
    urlPrefix += urlPrefix !== '' ? '/' + branch : branch
  }
  // Normal case with org/name/branch
  const location = path.toLowerCase().indexOf(urlPrefix.toLowerCase())
  if (location > -1) {
    return path.substring(location + urlPrefix.length)
  } else if (path.toLowerCase().indexOf(name.toLowerCase() > -1)) {
    // Exception case with only name in url
    return path.substring(
      path.toLowerCase().indexOf(name.toLowerCase()) + name.length
    )
  } else {
    return path
  }
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
          selected.toLowerCase().endsWith(updatedPath.toLowerCase())
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
