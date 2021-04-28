/* @flow */

import supportsCaptureOption from './supportsCaptureOption';

if (!supportsCaptureOption()) {
  const ETp = window.EventTarget ? window.EventTarget.prototype : window.Node.prototype;
  const originalAddEventListener = ETp.addEventListener;
  const originalRemoveEventListener = ETp.removeEventListener;

  ETp.addEventListener = function() {
    if (arguments.length >= 3) {
      const options = arguments[2];
      if (options && typeof options === 'object') {
        arguments[2] = !!options.capture;
      }
    }
    originalAddEventListener.apply(this, arguments);
  };
  ETp.addEventListener.POLYFILLED_OPTIONS_SUPPORT = true;

  ETp.removeEventListener = function() {
    if (arguments.length >= 3) {
      const options = arguments[2];
      if (options && typeof options === 'object') {
        arguments[2] = !!options.capture;
      }
    }
    originalRemoveEventListener.apply(this, arguments);
  };
  ETp.removeEventListener.POLYFILLED_OPTIONS_SUPPORT = true;
}
