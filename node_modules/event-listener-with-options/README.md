# event-listener-with-options

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Macil/event-listener-with-options/blob/master/LICENSE.txt) [![npm version](https://img.shields.io/npm/v/event-listener-with-options.svg?style=flat)](https://www.npmjs.com/package/event-listener-with-options) [![CircleCI Status](https://circleci.com/gh/Macil/event-listener-with-options.svg?style=shield)](https://circleci.com/gh/Macil/event-listener-with-options) [![Greenkeeper badge](https://badges.greenkeeper.io/Macil/event-listener-with-options.svg)](https://greenkeeper.io/)

This module exports two functions:
* `addEventListener(target, type, handler, options)`
* `removeEventListener(target, type, handler, options)`

These work like `target.addEventListener(type, handler, options)`, except that
`options` is allowed to be an object even in browsers which don't yet support
that. In that case, only the options object's `capture` property is respected.

See https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md for
more information on the options parameter.

This module also includes an optional polyfill. Use the following to override
the addEventListener and removeEventListener methods on all EventTargets with
replacements that support an options object if necessary:

```js
require('add-event-listener-with-options/js/polyfill');
```

## Types

Both [TypeScript](https://www.typescriptlang.org/) and
[Flow](https://flowtype.org/) type definitions for this module are included!
The type definitions won't require any configuration to use.
