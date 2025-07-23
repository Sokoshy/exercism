//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text, numRail) => {
  //array for stack rails
  let rails = new Array(numRail).fill("");
  // number of rail
  // direction top or bottom
  let direction = 1;
  // actual rail
  let currentRail = 0;

  for (const char of text) {
    rails[currentRail] += char;
    // change rail
    if (currentRail === numRail - 1 ) {
      direction = -1
    }else if (currentRail === 0) {
      direction = 1;
    }
    currentRail += direction;
  }
  return rails.join("");
};

export const decode = (text, numRail) => {
  let pattern = []
  let direction = 1;
  let currentRail = 0;
  for (const i in text) {
    pattern[i] = currentRail;
    if (currentRail === numRail - 1 ) {
      direction = -1
    }else if (currentRail === 0) {
      direction = 1;
    }
    currentRail += direction;
  }
  let count = new Array(numRail).fill(0);
  for (let i = 0; i < pattern.length; i++) {
    let rail = pattern[i];
    count[rail] += 1;
  }
  let cutTextEncode = new Array(numRail).fill("");
  let index = 0;
  for (let i = 0; i < numRail; i++) {
    let len = count[i];
    let part = text.slice(index, index + len);
    cutTextEncode[i] = part;
    index += len;
  }

  let pointers = new Array(numRail).fill(0);
  let result = ""
  for (let i = 0; i < pattern.length; i++) {
    let rail = pattern[i];
    let pos = pointers[rail];
    let letter = cutTextEncode[rail][pos];
    result += letter;
    pointers[rail]++
  }
  return result;
};
