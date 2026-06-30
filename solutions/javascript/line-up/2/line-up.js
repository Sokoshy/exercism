//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * Format a message for queue with a ordinal number
 *
 * @param {String}  name
 * @param {number} number
 *
 * @return {String} The string format with the good
 */
export const format = (name, number) => {
  const suffix = getSuffix(number);

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
  e;
  // if (endWithSt(number)) {
  //   return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  // } else if (endWithNd(number)) {
  //   return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  // } else if (endWithRd(number)) {
  //   return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  // }
  // return `${name}, you are the ${number}th customer we serve today. Thank you!`;
};

/**
 * See if the number is a th
 *
 * @param {number} number
 *
 * @return {bool}
 */
function endWithTh(number) {
  return (
    (number % 100 >= 10 && number % 100 <= 19) ||
    number % 10 === 0 ||
    (number % 10 >= 4 && number % 10 <= 9)
  );
}

/**
 * See if the number is a st
 *
 * @param {number} number
 *
 * @return {bool}
 */
function endWithSt(number) {
  return number % 10 === 1 && !endWithTh(number);
}

/**
 * See if the number is a nd
 *
 * @param {number} number
 *
 * @return {bool}
 */
function endWithNd(number) {
  return number % 10 === 2 && !endWithTh(number);
}

/**
 * See if the number is a rd
 *
 * @param {number} number
 *
 * @return {bool}
 */
function endWithRd(number) {
  return number % 10 === 3 && !endWithTh(number);
}

/**
 * get the suffix and return it
 *
 * @param {number} number
 *
 * @return {String}
 */
function getSuffix(number) {
  if (endWithSt(number)) {
    return "st";
  } else if (endWithNd(number)) {
    return "nd";
  } else if (endWithRd(number)) {
    return "rd";
  }
  return "th";
}
