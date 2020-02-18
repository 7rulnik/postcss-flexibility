# PostCSS Flexibility

[![NPM version](https://badge.fury.io/js/postcss-flexibility.svg)](http://badge.fury.io/js/postcss-flexibility)
[![Build Status](https://travis-ci.org/7rulnik/postcss-flexibility.svg)](https://travis-ci.org/7rulnik/postcss-flexibility)
[![Dependency Status](https://david-dm.org/7rulnik/postcss-flexibility.svg)](https://david-dm.org/7rulnik/postcss-flexibility)
[![devDependency Status](https://david-dm.org/7rulnik/postcss-flexibility/dev-status.svg)](https://david-dm.org/7rulnik/postcss-flexibility#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/7rulnik/postcss-flexibility/badge.svg)](https://coveralls.io/r/7rulnik/postcss-flexibility)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)


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
$ npm install --save-dev postcss postcss-flexibility
```

## Usage

```js
postcss([ require('postcss-flexibility') ])
```

See [PostCSS] docs for examples for your environment.

### Excluding rules

You can exclude rule from transformation by adding `/* flexibility-disable */` comment.

```css
.foo {
    /* flexibility-disable */
    display: flex;
}
```
will be processed to:
```css
.foo {
    /* flexibility-disable */
    display: flex;
}
```

### License

MIT © [Valentin Semirulnik](https://twitter.com/7rulnik)

[PostCSS]: https://github.com/postcss/postcss
[Flexibility]: https://github.com/10up/flexibility
