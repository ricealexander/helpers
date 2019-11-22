// parseKeyTrail(object, string)
///  takes a string representing the path of an object's keys
///  and an object and returns the value of the object at the key trail
///  returns undefined if key doesn't exist

// demo:
///  var object = {a: { b: { c: 'd'}}};
///  console.log(parseKeyTrail(object, 'a.b.c')); // returns: 'd'

function parseKeyTrail(object, string) {
  if (!string || typeof string !== 'string'
   || !object || typeof object !== 'object'
  ) return undefined;

  function followTrail(objectLevel, key) {
    if (objectLevel === undefined || objectLevel[key] === undefined) return undefined;
    return objectLevel[key];
  }

  const trail = string.split('.');
  return trail.reduce(followTrail, object);
}

export default parseKeyTrail;
