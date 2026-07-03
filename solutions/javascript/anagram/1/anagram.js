//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * From a target word and one or more candidate words, he will look at whether it is considered an anagram or not.
 *
 * @param {String} target
 * @param {Array} candidateWord
 *
 *
 *  @return {Array} Anagram words
 */
export const findAnagrams = (target, candidateWord) => {
  let result = [];
  let targetFormat = target.toLocaleLowerCase().split("").sort();
  let candidateFormat;

  for (let i = 0; i <= candidateWord.length - 1; i++) {
    if (
      target.length !== candidateWord[i].length ||
      target.toLocaleLowerCase() === candidateWord[i].toLocaleLowerCase()
    ) {
      continue;
    }
    candidateFormat = candidateWord[i].toLocaleLowerCase().split("").sort();
    if (arrayEqual(targetFormat, candidateFormat)) {
      result.push(candidateWord[i]);
    }
  }
  return result;
};

/**
 * See is a two array match
 *
 * @param {Array} a First array
 * @param {Array} b Second array
 *
 *
 *  @return {bool} true if is match otherwise false
 */
function arrayEqual(a, b) {
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
