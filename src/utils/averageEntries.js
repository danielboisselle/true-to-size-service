

module.exports = (entries) => {
  const sumOfEntries = entries.reduce((a, b) => a + b);
  const average = sumOfEntries / entries.length;

  if (`${average}`.length > 15) {
    return Number(average.toFixed(13));
  }
  return average;
};
