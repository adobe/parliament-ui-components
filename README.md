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

Follow the [installation instructions][] in the react-spectrum README to connect to Adobe's internal npm registry.

### Install dependencies

```sh
npm install
```

### Run Storybook

This project uses [Storybook][] for testing the look and behavior of its UI components.

```sh
npm run storybook
```

## License

Apache-2.0 © [smacdona](https://github.com/smacdona)

[installation instructions]: https://git.corp.adobe.com/React/react-spectrum-v2#npm
[storybook]: https://storybook.js.org/