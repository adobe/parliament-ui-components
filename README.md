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

import { Heading1, Footer } from '@adobe/parliament-ui-components'

const Example = ({ title }) => {
  return (
    <>
      <Heading1>{title}</Heading1>
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
yarn install
```

### Run Tests

```bash
yarn test
```

### Run Storybook

This project uses [Storybook][http://storybook.js.org/] for testing the look and behavior of its UI components.

```bash
yarn start-storybook
```

## Concurrent Development

If you want to do concurrent development of this project while it is a dependency of another project you can accomplish it by using [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/) and following these steps.

### Setup

#### 1. Register this Project

This will register `@adobe/parliament-ui-components`, `react` and `react-dom` so they can be used in other local projects. It will also avoid the [invalid hook call](https://reactjs.org/warnings/invalid-hook-call-warning.html) warning.

```bash
yarn link
cd node_modules/react
yarn link
cd ../react-dom
yarn link
```

#### 2. Watch for Changes

```bash
yarn run start
```

Now any changes you make in this project will automatically be built.

#### 3. Use Sibling Project

Go to the root directory of your sibling project and run the following commands:

```bash
yarn link react
yarn link react-dom
yarn link @adobe/parliament-ui-components
```

Now when you run your sibling project it will use the local copy of `@adobe/parliament-ui-components` that you can edit on the fly. Again, avoiding the [invalid hook call](https://reactjs.org/warnings/invalid-hook-call-warning.html) warning.

### Tear Down

When you no longer want to use the local copy of `@adobe/parliament-ui-components` you can revert back to the published package by following these steps.

#### 1. Unlink the Dependencies

In your sibling project run:

```bash
yarn unlink react
yarn unlink react-dom
yarn unlink @adobe/parliament-ui-components
yarn install --force
```

This will return your project to the state when you did a `yarn install`.

## Documentation

TODO

## Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
