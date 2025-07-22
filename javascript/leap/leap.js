//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (years) => {
  if (years % 400 === 0) {
    return true;
  } else if (years % 100 === 0) {
    return false;
  } else if (years % 4 === 0) {
    return true;
  } else {
    return false;
  }
};
