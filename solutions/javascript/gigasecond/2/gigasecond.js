//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * Add a gigasecond to the date
 *
 * @param {Date} date
 *
 * @return {Date} the new date with the gigasecond
 */

export const gigasecond = (date) => {
  return new Date(date.getTime() + Math.pow(10, 12));
};
