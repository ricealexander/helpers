const preloadTypes = {
  // Audio Files
  mp3:   'audio',
  ogg:   'audio',
  wav:   'audio',

  // Image Files
  jpg:   'image',
  jpeg:  'image',
  gif:   'image',
  png:   'image',
  svg:   'image',
  webp:  'image', // developed by Google
  avif:  'image', // developed by Apple
  heic:  'image', // developed by Apple
  heif:  'image', // developed by Alliance for Open Media

  // Font Formats
  eot:   'font',
  otf:   'font',
  ttf:   'font',
  woff:  'font',
  woff2: 'font',

  // Data Files
  csv:   'fetch',
  json:  'fetch',
  txt:   'fetch',
  xml:   'fetch',

  // Other
  js:    'script',
  css:   'style',
}

function getPreloadType (_extension) {
  if (typeof _extension !== 'string') {
    throw new TypeError(
      `Argument must be of type "string". Instead got "${typeof _extension}"`
    )
  }

  let extension = _extension.toLowerCase()
  if (extension.startsWith('.')) extension = extension.slice(1)

  return preloadTypes[extension] || null
}

export default getPreloadType
