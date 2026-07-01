//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  return new Date(addGigasecond(date));
};

/**
 * Convert gigasecond in milisecond
 *
 * @return {number} the gigasecond in milisecond
 */
function gigaSecondInMs() {
  return 10 ** 9 * 1000;
}

/**
 * add a gigasecond to the date
 *
 * @param {Date} Date
 *
 * @return {number} the date plus one gigasecond
 */
function addGigasecond(date) {
  return date.getTime() + gigaSecondInMs();
}
