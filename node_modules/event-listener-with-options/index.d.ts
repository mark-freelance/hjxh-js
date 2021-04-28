export interface Options {
  capture?: boolean;
  passive?: boolean;
}

export function addEventListener(target: EventTarget, type: string, handler: EventListener, options?: Options|boolean, wantsUntrusted?: boolean): void;

export function removeEventListener(target: EventTarget, type: string, handler: EventListener, options?: Options|boolean): void;
