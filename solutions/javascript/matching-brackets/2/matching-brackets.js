//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
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
    if (delimiters.length !== 0) {
      switch (input[i]) {
        case ")":
          if (
            input[i].charCodeAt(0) ===
            delimiters[delimiters.length - 1].charCodeAt(0) + 1
          ) {
            delimiters.pop();
          } else {
            return false;
          }
          break;
        case "}":
        case "]":
          if (
            input[i].charCodeAt(0) ===
            delimiters[delimiters.length - 1].charCodeAt(0) + 2
          ) {
            delimiters.pop();
          } else {
            return false;
          }
          break;
      }
    } else if (
      (delimiters.length === 0 && input[i] === ")") ||
      input[i] === "}" ||
      input[i] === "]"
    ) {
      return false;
  }
  if (delimiters.length > 0) {
    return false;
  }
  return true;
};
