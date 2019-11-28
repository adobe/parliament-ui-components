function stripManifestPath(path, { org = '', name = '', branch = '' } = {}) {
  if (!path) {
    return '';
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

export { stripManifestPath }
