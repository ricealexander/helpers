// parseKeyTrail(object, string)
// takes a string representing the path of an object's keys
// and an object and returns the value of the object at the key trail
// returns undefined if key doesn't exist

/*
const object = {prop: { longProp: { evenLongerProp: 'value'}}};

// without parseKeyTrail
// because any object property could be set to undefined
// we need to check each one in order to prevent throwing an error

const value =
  object.prop &&
  object.prop.longProp &&
  object.prop.longProp.evenLongerProp

// with parseKeyTrail
const value = parseKeyTrail(object, 'prop.longProp.evenLongerProp')

// this need may be eliminated by optional chaining
const value = object.prop?.longProp?.evenLongerProp

*/

function parseKeyTrail (object, trail) {
  if (
    !object || typeof object !== 'object' ||
    !trail || typeof trail !== 'string'
  ) return undefined

  function followTrail (objectLevel, key) {
    if (objectLevel === undefined || objectLevel[key] === undefined) {
      return undefined
    }
    return objectLevel[key]
  }

  return trail
    .split('.')
    .reduce((result, value) => followTrail(result, value), object)
}

// function parseKeyTrail (object, trail) {
//   if (!object || typeof object !== 'object' ||
//       !trail  || typeof trail !== 'string'
//   ) return undefined

//   return trail
//     .split('.')
//     .reduce((level, value) => level?[value], object)
// }

export default parseKeyTrail
