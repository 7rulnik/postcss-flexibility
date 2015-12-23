# PostCSS Flexibility [![Build Status][ci-img]][ci]

[PostCSS] plugin for [Flexibility](https://github.com/10up/flexibility).

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/7rulnik/postcss-flexibility.svg
[ci]:      https://travis-ci.org/7rulnik/postcss-flexibility

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
