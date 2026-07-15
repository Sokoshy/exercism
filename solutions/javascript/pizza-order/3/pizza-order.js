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
  const totalSauce = function saucePrice(...extras) {
    if (extras[0] === undefined) {
      return 0
    }
    return sauce[extras[0]] + saucePrice(...extras.slice(1))
  }

  return pizzaOrders.reduce((total, order) => {
    return total + pizzaPrice[order.pizza] + totalSauce(...order.extras)
  }, 0)

}
