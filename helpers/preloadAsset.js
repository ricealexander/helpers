import getExtensionFromFileName from './getExtensionFromFileName'
import getMimeType              from './getMimeType'
import getPreloadType           from './getPreloadType'

// preload asset takes a file name and optional values for attributes
// if 'as' and 'type' are not provided, preloadAsset attempts to coerce
// the sourceType and MimeType from the file extension
function preloadAsset (file, { as, crossorigin = false, type }) {
  if (!file) {
    throw new Error('First Argument is required')
  }
  if (typeof file !== 'string') {
    throw new TypeError(
      `First Argument must be of type string. Instead got ${typeof file}`
    )
  }
  const extension  = getExtensionFromFileName(file)
  const sourceType = as || getPreloadType(extension)
  const mimeType   = type || getMimeType(extension)

  const asset = document.createElement('link')
  asset.rel = 'preload'
  asset.href = file

  if (sourceType) asset.as = sourceType
  if (mimeType) asset.type = mimeType
  if (crossorigin) asset.setAttribute('crossorigin', '')

  document.head.insertAdjacentElement('beforeend', asset)
}

export default preloadAsset
