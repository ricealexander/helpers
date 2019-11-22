import { getHexColor } from './helpers';

console.log({
  twoDigit: getHexColor('#12'),
  threeDigit: getHexColor('#123'),
  sixDigit: getHexColor('#123456'),
  eightDigit: getHexColor('#12345600'),
  namedColor: getHexColor('SteelBlue'),
  namedColorMixedCase: getHexColor('sTeElBlUe'),
  wrongName: getHexColor('BloodOrange'),
});
