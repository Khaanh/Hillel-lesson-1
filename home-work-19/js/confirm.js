import {cancelPayment} from './vars.js'
import {Order} from './classOrder.js'
import {hideForm} from './hideForm.js';
import {showNotific} from './showNotific.js';
/**
* confirmOrder - выводим сообщение с информацией о заказе и подтверждение
* @param {boolean} status - статус о прохождения валидации на 3 ингрединета
* @param {array} ingredients - массив ингредиентов
* @param {string} size - размер выбранной пиццы
*/

export function confirmOrder(status, ingredients, size) {
  let arrDescr = [], // масив для вывода ингредиентов
  strArrDescr = '', // делаем из массива arrDescr - строки, для вывода
  agreement = false; // результат confirm
  
  if (status) {
    for (let i = 0; i < ingredients.length; i++) {
      arrDescr.push(ingredients[i].value);
    }

    strArrDescr = arrDescr.join(', ');
    agreement = confirm(`Your order: ${size} pizza with ${strArrDescr}, all right?`);

    if (agreement) {
      allOrders.push(
        new Order({
          size: size,
          ingredients: strArrDescr,
          status: 'ordered',
        })
      )
      hideForm();
      showNotific(allOrders);
    } else {
      cancelPayment.classList.add('is-warning')
    }
    
    return agreement;
  }
  
  return agreement;
}

let allOrders = [];
