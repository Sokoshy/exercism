//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let delimiters = [];
  let inputLength = input.length;
  if (input === "") return true;

  for (let i = 0; i < inputLength; i++) {
    switch (input[i]) {
      case "{":
        delimiters.push(input[i]);
        break;
      case "[":
        delimiters.push(input[i]);
        break;
      case "(":
        delimiters.push(input[i]);
        break;
      default:
        break;
    }
    if (input[i] in pairs) {
      if (delimiters[delimiters.length - 1] === pairs[input[i]]) {
        delimiters.pop();
      } else {
        return false;
      }
    }
  }
  if (delimiters.length > 0) return false;
  return true;
};
