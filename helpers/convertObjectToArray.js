// converts an object to an array of objects
// for example:
//
// Source Object:
// {
//   src: "assets/image/cute-kitten.png",
//   alt: "A happy kitten in a Santa hat",
// }
//
// Converted Object:
// [
//   { key: "src", value: "assets/image/cute-kitten.png" },
//   { key: "alt", value: "A happy kitten in a Santa hat" }
// ]

const convertObjectToArray = object => (
  Object.keys(object)
    // object keys are typically ordered, but sometimes there can be quirks,
    // especially when converting from JSON
    .sort()
    .map(key => ({ key, value: object[key] }))
)

export default convertObjectToArray
