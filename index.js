import { parseTwitterUserLink } from './lib';

console.log({
  partial: parseTwitterUserLink('stlpublicradio'),
  handle: parseTwitterUserLink('@stlpublicradio'),
  url: parseTwitterUserLink('https://twitter.com/stlpublicradio'),
  edgeCases: {
    // should we extract user from status messages?
    statusLink: parseTwitterUserLink('https://twitter.com/stlpublicradio/status/1159624721769672704'),
    // this is a valid link!
    handleInURL: parseTwitterUserLink('https://twitter.com/@stlpublicradio'),
    incompleteURL: parseTwitterUserLink('twitter.com/stlpublicradio'),
  },
});
