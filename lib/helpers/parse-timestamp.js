const parseTimestamp = (timestamp) => {
  // validate "00", "00:00", "00:00:00" format
  if (typeof timestamp !== 'string'
    || timestamp.split(':').length === 0
    || timestamp.split(':').length > 3
  ) return null;

  return timestamp.split(':').reverse()
    .reduce((total, region, index) => (
      total + (parseInt(region, 10) * (60 ** index))
    ), 0);
};

export default parseTimestamp;
