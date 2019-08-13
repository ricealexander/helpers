import { getHexColor } from './lib/helpers/color-converters';

console.log({
  twoDigit: getHexColor('#12'),
  threeDigit: getHexColor('#123'),
  sixDigit: getHexColor('#123456'),
  eightDigit: getHexColor('#12345600'),
});
