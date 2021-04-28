# addeventlistener

`addEventListener` that takes options as an object and returns a function to remove the listener.

## install

```sh
$ npm install addeventlistener
```

## api

### `addEventListener(element, eventName, listener, options)`

```js
import addEventListener from 'addeventlistener'

const removeEventListener = addEventListener(
  document.body,
  'touchmove',
  e => {},
  { passive: false }
)
```

### `once(element, eventName, listener, options)`

Listen for the event and stop listening after it has occurred once. You can still use the returned function to stop listening if you want to stop listening before the event has occurred once.

```js
import { once } from 'addeventlistener'

const removeEventListener = once(window, 'click', console.log)
```

### CommonJS

```js
const { default: addEventListener, once } = require('addeventlistener')
```
