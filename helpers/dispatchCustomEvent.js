import isElementType from './isElementType'

// A wrapper for dispatching a new custom event, with validation
const dispatchCustomEvent = (element, eventName, options = {}) => {
  if (!isElementType(element)) {
    throw new TypeError('First argument must be an Element')
  }
  if (typeof eventName !== 'string') {
    throw new TypeError(
      `Second argument must be of type string. Instead got ${typeof eventName}`
    )
  }
  element.dispatchEvent(new CustomEvent(eventName, options))
}

export default dispatchCustomEvent
