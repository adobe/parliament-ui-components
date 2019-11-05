function useManifestPath(path, urlPrefix = '') {
  if (!path) {
    return ''
  }
  let location = path.toLowerCase().indexOf(urlPrefix.toLowerCase())
  if (location > -1) {
    return path.substring(location + urlPrefix.length)
  } else {
    return path
  }
}

export default useManifestPath
