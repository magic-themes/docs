## @magic-themes/docs

the [@magic](https://github.com/magic/core) documentation theme. shared between all @magic documentation pages

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-themes/docs.svg
[npm-url]: https://www.npmjs.com/package/@magic-themes/docs
[travis-image]: https://img.shields.io/travis/com/magic-themes/docs/master
[travis-url]: https://travis-ci.com/magic-themes/docs
[appveyor-image]: https://img.shields.io/appveyor/ci/magicthemes/docs/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicthemes/docs/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-themes/docs/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-themes/docs
[greenkeeper-image]: https://badges.greenkeeper.io/magic-themes/docs.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-themes/docs.svg
[snyk-image]: https://snyk.io/test/github/magic-themes/docs/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-themes/docs

#### install:
```bash
npm install --save magic-themes/docs
```

#### usage:

##### import:
```javascript
// config.js:

module.exports = {
  //... other config
  THEME: 'docs',
}
```

##### overwrite
you can overwrite any style.

create /assets/themes/docs/index.js, any css there will overwrite the theme css

```javascript
module.exports = {
  body: {
    color: 'orange',
  },
}
```

@magic will then import and use the theme automagically.
