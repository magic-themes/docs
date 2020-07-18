## @magic-themes/docs

the [@magic](https://github.com/magic/core) documentation theme.

shared between all @magic documentation pages.

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
npm install --save --save-exact @magic-themes/docs
```

#### usage:

##### import:
```javascript
// config.mjs:

export default {
  //... other config
  THEME: 'docs',

  // multiple themes
  // THEME: [...other themes, 'example']
}
```

@magic will then import and use the theme automagically.

##### overwrite
you can overwrite any style in this theme.

create /assets/themes/docs/index.mjs, any css there will overwrite the theme css

```javascript
export default vars => ({
  body: {
    color: vars.colors.orange[500],
  },
})
```

#### changelog
##### 0.0.1
first release

##### 0.0.2
use @magic npm packages instead of github

##### 0.0.3
update README

##### 0.0.4
set node version to 13.5.0 and engineStrict

##### 0.0.5
export vars from theme to merge with THEME_VARS before rendering modules.

##### 0.0.6
theme vars are now named according to @magic standard (which is in flux...)

##### 0.0.7 
bump required node version to 14.2.0

##### 0.0.8
update logo

##### 0.0.9
update icon css

##### 0.0.10
fix icon positioning

##### 0.0.11 - unreleased
...
