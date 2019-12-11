function stripManifestPath(path, { org = '', name = '', branch = '' } = {}) {
  if (!path) {
    return '';
  }
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  let urlPrefix = '';
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
  let location = path.toLowerCase().indexOf(urlPrefix.toLowerCase())
  if (location > -1) {
    return path.substring(location + urlPrefix.length)
  }
  // Exception case with only name in url
  else if (path.toLowerCase().indexOf(name.toLowerCase() > -1)) {
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
