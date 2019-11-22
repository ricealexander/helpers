// accepts a timestamp represented in seconds and
// returns a timestamped version ex: 90 -> "1:30"

const formatTimestamp = (timestamp) => {
  const stamp = Number(timestamp);
  if (Number.isNaN(stamp)) return NaN;

  const seconds = Math.trunc((stamp) % 60);
  const minutes = Math.trunc((stamp / 60) % 60);
  const hours = Math.trunc((stamp / (60 * 60)) % 24);

  const formatHours = (hours) ? `${hours.toString()}:` : '';
  const formatMinutes = (minutes) ? `${minutes.toString()}:` : '0:';
  const formatSeconds = (seconds) ? seconds.toString().padStart(2, '0') : '00';

  return formatHours + formatMinutes + formatSeconds;
};


const parseTimestamp = (timestamp) => {
  // validate "00", "00:00", "00:00:00" format
  if (typeof timestamp !== 'string'
    || timestamp.split(':').length === 0
    || timestamp.split(':').length > 3
  ) return null;

  // when provided with a timestamp: "01:23:45"
  // split it into an array ["01", "23", "45"]
  // reverse the array ["45", "23", "01"]

  // (60 ** index) corresponds to the # of seconds in a region
  // [60^0]: 1, [60^1]: 60, [60^2]: 3600 (seconds, minutes, hours)

  return timestamp.split(':').reverse()
    .reduce((total, region, index) => {
      // allow decimals on the last region "01:23:45.678"
      const value = (index === 0)
        ? parseFloat(region, 10)
        : parseInt(region, 10);
      const multiplier = (60 ** index);

      return total + (value * multiplier);
    }, 0);
};

export { formatTimestamp, parseTimestamp };
