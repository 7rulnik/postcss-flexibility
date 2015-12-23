# PostCSS Flexibility

[![NPM version][npm-img]][npm-url]
[![Build Status][travis-img]][travis-url]
[![Dependency Status][daviddm-img]][daviddm-url]
[![XO code style][xo-img]][xo-url]


[PostCSS] plugin for [Flexibility](https://github.com/10up/flexibility).

[PostCSS]: https://github.com/postcss/postcss
[travis-img]: https://travis-ci.org/7rulnik/postcss-flexibility.svg
[travis-url]: https://travis-ci.org/7rulnik/postcss-flexibility
[daviddm-img]: https://david-dm.org/7rulnik/postcss-flexibility.svg
[daviddm-url]: https://david-dm.org/7rulnik/postcss-flexibility
[npm-img]: https://badge.fury.io/js/postcss-flexibility.svg
[npm-url]: https://www.npmjs.com/package/postcss-flexibility
[xo-img]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo


```css
.foo {
	display: flex;
}
```

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
