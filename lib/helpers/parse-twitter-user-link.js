const makeStartWith = (string, starter) => {
  if (!string || !starter) return string;

  if (string.startsWith(starter)) return string;
  return `${starter}${string}`;
};

const parseTwitterUserLink = (segment) => {
  if (!segment || typeof segment !== 'string') return null;

  // if we're given a full URL
  if (segment.includes('twitter.com/')) {
    const url = segment;
    const partial = url.split('twitter.com/')[1];
    if (!partial || partial.includes('/')) return null;

    const handle = makeStartWith(partial, '@');
    return `<a href="${url}">${handle}</a>`;
  }

  // if we're given a tag
  /// a tag starts with '@' and does not contain any '/' character
  if (segment.startsWith('@') && !segment.includes('/')) {
    const url = `https://twitter.com/${segment.slice(1)}`;
    const handle = segment;
    return `<a href="${url}">${handle}</a>`;
  }

  // if we're given a partial
  /// a partial does not contain any '/' character
  if (!segment.includes('/')) {
    const url = `https://twitter.com/${segment}`;
    const handle = makeStartWith(segment, '@');
    return `<a href="${url}">${handle}</a>`;
  }

  return null;
};

export default parseTwitterUserLink;
