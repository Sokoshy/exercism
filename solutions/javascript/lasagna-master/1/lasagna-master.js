/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determine whether the lasagna is done
 *
 * @param {number} time
 *
 *
 *  @return {String} return a string with a information about the lasagna timer
 */
export function cookingStatus(time) {
  return time === 0
    ? "Lasagna is done."
    : time > 0
      ? "Not done, please wait."
      : "You forgot to set the timer.";
}

/**
 * Estimate the preparation time
 *
 * @param {Array<String>} layer
 * @param {?number} time
 *
 *  @return {number} return a number of time for preparation time
 */
export function preparationTime(layer, time) {
  return layer.length * (time ?? 2);
}

/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {Array<String>} ingredient
 *
 *  @return {object} return an object with the quantities of sauce and noodle needed
 */
export function quantities(ingredient) {
  let noodles = 0;
  let sauce = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient[i] === "noodles") {
      noodles += 50;
    }
    if (ingredient[i] === "sauce") {
      sauce += 0.2;
    }
  }
  return { noodles: noodles, sauce: sauce };
}

/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {Array<String>} friendsList
 * @param {Array<String>} myList
 *a
 */

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scale the recipe
 *
 * @param {object} recipe
 * @param {number} portion
 *
 *  @return {object} return an object with the quantities of sauce and noodle needed
 */
export function scaleRecipe(recipe, portion) {
  let modifyRecipe = Object.assign({}, recipe);
  for (let key in modifyRecipe) {
    modifyRecipe[key] = (modifyRecipe[key] / 2) * portion;
  }
  return modifyRecipe;
}
