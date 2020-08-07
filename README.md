# parliament-ui-components

> UI Components for Parliament projects

[![Version](https://img.shields.io/npm/v/@adobe/parliament-ui-components.svg)](https://npmjs.org/package/@adobe/parliament-ui-components)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/parliament-ui-components.svg)](https://npmjs.org/package/@adobe/parliament-ui-components)
[![Build Status](https://travis-ci.com/adobe/parliament-ui-components.svg?branch=master)](https://travis-ci.com/adobe/parliament-ui-components)
[![codecov](https://codecov.io/gh/adobe/parliament-ui-components/branch/master/graph/badge.svg)](https://codecov.io/gh/adobe/parliament-ui-components)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/adobe/parliament-ui-components.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/adobe/parliament-ui-components/context:javascript)

## Install

You can install the package using a package manager like [npm](https://docs.npmjs.com/cli/npm) or [yarn](https://classic.yarnpkg.com/lang/en/).
```bash
yarn add @adobe/parliament-ui-components
```

## Usage

```jsx
import React from 'react'

import { Header, Footer } from '@adobe/parliament-ui-components'

function Example {
  return (
    <>
      <Header siteTitle={title} />
      <div>Hello world!</div>
      <Footer />
    </>
  )
}
```

and don't forget to import the packages styles from `@adobe/parliament-ui-components/dist/index.css`.

## Development

### Install dependencies

```bash
yarn
```

### Run Tests

```bash
yarn test
```

### Run Storybook

This project uses [Storybook][http://storybook.js.org/] for testing the look and behavior of its UI components.

```bash
yarn storybook
```

## Documentation

TODO

## Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
