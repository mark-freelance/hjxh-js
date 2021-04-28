/* @flow */

import supportsCaptureOption from './supportsCaptureOption';

export type Options = {
  capture?: ?boolean;
  passive?: ?boolean;
};

export function addEventListener(target: EventTarget, type: string, handler: EventListener, options?: Options|boolean, wantsUntrusted?: boolean) {
  const optionsOrCapture: any = (supportsCaptureOption() || !options || typeof options !== 'object') ?
    options : !!options.capture;
  (target:any).addEventListener(type, handler, optionsOrCapture, wantsUntrusted);
}

export function removeEventListener(target: EventTarget, type: string, handler: EventListener, options?: Options|boolean) {
  const optionsOrCapture: any = (supportsCaptureOption() || !options || typeof options !== 'object') ?
    options : !!options.capture;
  target.removeEventListener(type, handler, optionsOrCapture);
}
