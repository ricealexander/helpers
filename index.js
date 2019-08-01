import { parseTimestamp } from './lib';

const timestamps = ['0:00', '1:12', '34', '1:23:45.678'];
console.log(timestamps.map(stamp => parseTimestamp(stamp)));
