const parseTwitterUserLink = (segment) => {
  if (!segment || typeof segment !== 'string') return null;

  // if we're given a full URL
  if (segment.includes('twitter.com/')) {
    const url = segment;
    const partial = url.split('twitter.com/')[1];
    if (!partial || partial.includes('/')) return null;

    const tag = `@${partial}`;
    return `<a href="${url}">${tag}</a>`;
  }

  // if we're given a tag
  /// a tag starts with '@' and does not contain any '/' character
  if (segment.startsWith('@') && !segment.includes('/')) {
    const url = `https://twitter.com/${segment.slice(1)}`;
    const tag = segment;
    return `<a href="${url}">${tag}</a>`;
  }

  // if we're given a partial
  /// a partial does not contain any '/' character
  if (!segment.includes('/')) {
    const url = `https://twitter.com/${segment}`;
    const tag = `@${segment}`;
    return `<a href="${url}">${tag}</a>`;
  }

  return null;
};

export default parseTwitterUserLink;
