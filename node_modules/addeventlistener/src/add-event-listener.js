import {
  addEventListener as addEventListenerWithOptions,
  removeEventListener as removeEventListenerWithOptions
} from 'event-listener-with-options'

const addEventListener = (element, name, listener, options) => {
  addEventListenerWithOptions(element, name, listener, options)
  return () => removeEventListenerWithOptions(element, name, listener, options)
}

export default addEventListener
