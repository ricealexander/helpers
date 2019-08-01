import { parseKeyTrail } from './lib';

const episode = {
  audio: 'path/to/audio',
  chapter: {
    number: 1,
    episode: 1,
    title: 'Chapter Title Here',
  },
  speaker: {
    name: 'Jane Doe',
    title: 'Science and Engineering award-winner',
    photos: {
      '5000x3333': 'jane-doe_5000x3333.jpg',
      '1080x700': 'jane-doe_1080x700.jpg',
    },
  },
};

console.log({
  audio: parseKeyTrail(episode, 'audio'),
  chapterTitle: parseKeyTrail(episode, 'chapter.title'),
  photo: parseKeyTrail(episode, 'speaker.photos.1080x700'),
  notExists: parseKeyTrail(episode, 'speaker.photos.300x200'),
});
