# PostCSS Flexibility

[![NPM version][npm-img]][npm-url]
[![Build Status][travis-img]][travis-url]
[![Dependency Status][daviddm-img]][daviddm-url]
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

If you’re using [Autoprefixer] right now, you should put postcss-flexibility after it.
When [this issue](https://github.com/postcss/autoprefixer/issues/608) is closed you'll be able to put postcss-flexibility  before [Autoprefixer] too.

```js
postcss([
	require('autoprefixer'),
	require('postcss-flexibility')
])
```

--

### License

MIT © [Valentin Semirulnik](https://twitter.com/7rulnik)


[PostCSS]: https://github.com/postcss/postcss
[Autoprefixer]: https://github.com/postcss/autoprefixer
[Flexibility]: https://github.com/10up/flexibility
[travis-img]: https://travis-ci.org/7rulnik/postcss-flexibility.svg
[travis-url]: https://travis-ci.org/7rulnik/postcss-flexibility
[daviddm-img]: https://david-dm.org/7rulnik/postcss-flexibility.svg
[daviddm-url]: https://david-dm.org/7rulnik/postcss-flexibility
[npm-img]: https://badge.fury.io/js/postcss-flexibility.svg
[npm-url]: https://www.npmjs.com/package/postcss-flexibility
[xo-img]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
