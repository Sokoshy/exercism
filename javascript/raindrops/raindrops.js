//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  const sound = {
    3: "Pling",
    5: "Plang",
    7: "Plong",
  }
  let result = ""
  for (const i in sound) {
    if (number % Number(i) === 0) {
      result += sound[i]
    }
  }
  return result || number.toString();
};
