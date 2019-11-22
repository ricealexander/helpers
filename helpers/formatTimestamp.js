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

export default formatTimestamp;
