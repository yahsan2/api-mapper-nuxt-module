# api-mapper-nuxt-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> nuxt module for mapping uri and response props of rest api

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `api-mapper-nuxt-module` dependency with `yarn` or `npm` to your project
2. Add `api-mapper-nuxt-module` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    'api-mapper-nuxt-module',

    // With options
    ['api-mapper-nuxt-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Ryosuke Miyamoto <yahsan2@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/api-mapper-nuxt-module.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/api-mapper-nuxt-module

[npm-downloads-src]: https://img.shields.io/npm/v/api-mapper-nuxt-module/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/api-mapper-nuxt-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/yahsan2/api-mapper-nuxt-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/yahsan2/api-mapper-nuxt-module

[codecov-src]: https://img.shields.io/codecov/c/github/yahsan2/api-mapper-nuxt-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/yahsan2/api-mapper-nuxt-module

[david-dm-src]: https://david-dm.org/yahsan2/api-mapper-nuxt-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/yahsan2/api-mapper-nuxt-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
