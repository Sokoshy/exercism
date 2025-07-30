/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/**
 * Determine whether the lasagna is done
 *
 * @param {number} remainingTime
 * @returns {string} tree different string possible
 */
export function cookingStatus(remainingTime) {
    switch (remainingTime) {
        case 0:
            return "Lasagna is done."
        case undefined:
            return "You forgot to set the timer."
        default:
            return "Not done, please wait."
    }
}

/**
* Estimate the preparation time
*
* @param {string[]} layer
* @param {number} time
* @returns {number} the number of minutes estimate preparation time
*/
export function preparationTime(layer, time) {
    let count = 0
    if (time === undefined) {
        time = 2
    }
    for (let i = 0; i < layer.length; i++) {
        count += time
    }
    return count;
}

/**
 * @typedef {Object} Result
 * @property {number} noodles - Quantities of noodles
 * @property {number} sauce - Quantities of sauce
 */
/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {string[]} layer
 * @return {Result} The result should be returned as an object with quantities of noodles and sauce
 */
export function quantities(layer) {
     let result = {
        noodles: 0,
        sauce: 0,
    };
    for (const ingredient of layer) {
        if (ingredient === "noodles") {
            result.noodles += 50
        }else if (ingredient === "sauce") {
            result.sauce += 0.2
        }
    }
    return result;
}

/**
 * Add the secret ingredient
 *
 * @param {string[]} friendsList
 * @param {string[]} myList
 * @return {void} should not return anything
 */
export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1])
}

/**
 * Add the secret ingredient
 *
 * @param {recipe} recipe
 * @param {int} portion
 * @return {recipe} return a recipe object with the amounts needed for the desired number of portions.
 */
export function scaleRecipe(recipe, portion){
    let recipeCopies = Object.assign({}, recipe);
    portion = portion / 2

    for (const ingredient in recipeCopies) {
        recipeCopies[ingredient] *= portion;
    }
    return recipeCopies;
}