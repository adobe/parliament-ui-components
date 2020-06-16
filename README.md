# parliament-ui-components

> UI Components for Parliament projects

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/parliament-ui-components-too.svg)](https://www.npmjs.com/package/parliament-ui-components-too) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @parliament/parliament-ui-components
```

## Usage

```jsx
import React, { Component } from 'react'

import { Header, Footer } from '@parliament/parliament-ui-components'

class Example extends Component {
  render() {
    return (
      <>
        <Header siteTitle={title} />
        <div>Hello world!</div>
        <Footer />
      </>
    )
  }
}
```

## Development

This project depends on libraries that are internal to Adobe, such as `react-spectrum`.
You will need to edit your `~/.npmrc` file to successfully install all dependencies.

Follow the [installation instructions](https://react-spectrum.corp.adobe.com/guides/getting_started) in the react-spectrum README to connect to Adobe's internal npm registry.

### Install dependencies

```sh
npm install
```

### Run Storybook

This project uses [Storybook][] for testing the look and behavior of its UI components.

```sh
npm run storybook
```

### Importing React-Spectrum Components

Currently we are using react-spectrum v2, with plans to upgrade to v3. One of the things we've noticed that importing a Component from react-spectrum using:

```javascript
import Search from '@react/react-spectrum/Search'
```

works great in Storybook but when we import it into other projects like [parliament-client-template](https://git.corp.adobe.com/devrel/parliament-client-template) it throws an error.

```
Uncaught Error: Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function but got: object
```

Since it's difficult to change any webpack settings in a Gatsby project we can work around this error by importing react-spectrum components like this:

```javascript
const Search = require('@react/react-spectrum/Search').default
```

## License

Apache-2.0 © [smacdona](https://github.com/smacdona)

[installation instructions]: https://git.corp.adobe.com/React/react-spectrum-v2#npm
[storybook]: https://storybook.js.org/
