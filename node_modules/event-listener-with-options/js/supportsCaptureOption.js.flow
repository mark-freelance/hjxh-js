/* @flow */

let cachedResult = null;

export default function supportsCaptureOption(): boolean {
  if (cachedResult === null) {
    let result = false;
    try {
      const opts = (Object:any).defineProperty({}, 'capture', {
        get() {
          result = true;
          return undefined;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {
      //ignore
    }
    cachedResult = result;
  }
  return cachedResult;
}
