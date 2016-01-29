# PostCSS Flexibility

[![NPM version][npm-img]][npm-url]
[![Build Status][travis-img]][travis-url]
[![Dependency Status][daviddm-img]][daviddm-url]
[![devDependency Status][daviddm-dev-img]][daviddm-dev-url]
[![Code coverage status][coveralls-img]][coveralls-url]
[![XO code style][xo-img]][xo-url]


[PostCSS] plugin for [Flexibility].


```css
.foo {
	display: flex;
}
```
will be processed to:
```css
.foo {
	-js-display: flex;
	display: flex;
}
```

## Installation

```sh
$ npm install --save-dev postcss-flexibility
```

## Usage

```js
postcss([ require('postcss-flexibility') ])
```

See [PostCSS] docs for examples for your environment.


--

### License

MIT © [Valentin Semirulnik](https://twitter.com/7rulnik)


[PostCSS]: https://github.com/postcss/postcss
[Flexibility]: https://github.com/10up/flexibility
[travis-img]: https://travis-ci.org/7rulnik/postcss-flexibility.svg
[travis-url]: https://travis-ci.org/7rulnik/postcss-flexibility
[daviddm-img]: https://david-dm.org/7rulnik/postcss-flexibility.svg
[daviddm-url]: https://david-dm.org/7rulnik/postcss-flexibility
[daviddm-dev-img]: https://david-dm.org/7rulnik/postcss-flexibility/dev-status.svg
[daviddm-dev-url]: https://david-dm.org/7rulnik/postcss-flexibility#info=devDependencies)
[npm-img]: https://badge.fury.io/js/postcss-flexibility.svg
[npm-url]: https://www.npmjs.com/package/postcss-flexibility
[xo-img]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
[coveralls-img]: https://coveralls.io/repos/github/7rulnik/postcss-flexibility/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/7rulnik/postcss-flexibility?branch=master
