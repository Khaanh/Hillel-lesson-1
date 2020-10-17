import {checkIngredients} from './check.js';
import {confirmOrder} from './confirm.js';
// import {confirmOrder} from './confirm.js';
import {pizzaSize, ingredientsList, orderBtn} from './vars.js';

export function orderButton() {
  orderBtn.onclick = function(e) {
    e.preventDefault();
    
    let pizzaSizeValue = 0,
    ingredientsArr = [];
    
    // Выбор размера пиццы
    for (let i = 0; i < pizzaSize.length; i++) {
      if (pizzaSize[i].checked == true) {
        pizzaSizeValue = pizzaSize[i].value;
      }
    }
    
    // Выбор ингредиентов
    for (let i = 0; i < ingredientsList.length; i++) {
      if (ingredientsList[i].checked == true) {
        ingredientsArr.push(ingredientsList[i]);
      }
    }
    
    let checkedFlag = checkIngredients(ingredientsArr, pizzaSizeValue);
    
    if (checkedFlag) {
      confirmOrder(true, ingredientsArr, pizzaSizeValue);
    }
  }
}