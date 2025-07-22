//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (firstDate) => {
  let dateMilliseconds = firstDate.getTime();
  const GIGASECOND_IN_MS = 1_000_000_000 * 1000;
  dateMilliseconds +=  GIGASECOND_IN_MS
  return new Date(dateMilliseconds)
};
