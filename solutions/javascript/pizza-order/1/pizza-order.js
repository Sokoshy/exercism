/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const pizzaPrice = {
    "Margherita": 7,
    "Caprese": 9,
    "Formaggio": 10,
  }
  const sauce = {
    "ExtraSauce": 1,
    "ExtraToppings": 2,
  }
  const totalSauce = function saucePrice(...extras) {
    if (extras[0] === undefined) {
      return 0
    }
    return sauce[extras[0]] + saucePrice(...extras.slice(1))
  }
  return pizzaPrice[pizza] + totalSauce(...extras)


}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  const pizzaPrice = {
    "Margherita": 7,
    "Caprese": 9,
    "Formaggio": 10,
  }
  const sauce = {
    "ExtraSauce": 1,
    "ExtraToppings": 2,
  }
  let length = pizzaOrders.length
  let pizza = 0;
  let saucePrice = 0;
  const totalSauce = function saucePrice(...extras) {
    if (extras[0] === undefined) {
      return 0
    }
    return sauce[extras[0]] + saucePrice(...extras.slice(1))
  }

  for (let i = 0; i < length; i++) {
    pizza += pizzaPrice[pizzaOrders[i].pizza]
    saucePrice += totalSauce(...pizzaOrders[i].extras)
  }
  return pizza + saucePrice

}
