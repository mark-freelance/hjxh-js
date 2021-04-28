import addEventListener from './add-event-listener'

const once = (element, name, listener, options) => {
  const off = addEventListener(element, name, (...args) => {
    off()
    return listener(...args)
  }, options)
  return off
}

export default once
