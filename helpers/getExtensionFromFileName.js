function getExtensionFromFileName (file) {
  if (typeof file !== 'string') {
    throw new TypeError(
      `Argument must be of type "string". Instead got "${typeof file}"`
    )
  }

  const match = file.match(/^(.*)(\.[\dA-Za-z]+)$/)
  if (!match) return null

  const [_file, _filename, extension] = match
  return extension.toLowerCase()
}

export default getExtensionFromFileName
