import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { stripManifestPath } from '../ManifestUtils';

const { SideNav, SideNavItem } = require('@react/react-spectrum/SideNav')

const nav = (data, gitInfo) => {
  return data.map((node, index) => {
    const updatedPath = stripManifestPath(node.path, gitInfo)
    console.log(updatedPath)
    return (
      <SideNavItem
        key={index}
        aria-current='page'
        isNested={false}
        disabled={false}
        defaultExpanded={true}
        onClick={() => {
          if (updatedPath) navigate(updatedPath)
        }}
        label={node.title}
        target='_self'
        value={node.title}
      >
        {node.pages ? nav(node.pages, gitInfo) : ''}
      </SideNavItem>
    )
  })
};

const defaultFocus = (theObject, selected, urlPrefix) => {
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
        if (selected.endsWith(updatedPath)) {
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
};

const Nav = ({ data, selected, gitInfo }) => {
  return (
    <nav>
      <SideNav
        autoFocus={true}
        defaultValue={defaultFocus(data, selected, gitInfo)}
        isNested={false}
        manageTabIndex={false}
        typeToSelect
        variant='multiLevel'
      >
        {nav(data, gitInfo)}
      </SideNav>
    </nav>
  )
};

Nav.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.string,
  gitInfo: PropTypes.string
}

Nav.defaultProps = {
  data: [],
  selected: '',
  gitInfo: {}
}
export default Nav
