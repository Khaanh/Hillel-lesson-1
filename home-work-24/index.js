let orderForm = document.querySelector('#form-order');
let pizzaSize = document.querySelectorAll('.size-input');
let ingredientsList = document.querySelectorAll('.ingredients-input');
let orderBtn = document.querySelector('#btn-order');
let rateBlock = document.querySelector('.rate-block');
let btnRate = document.querySelectorAll('.btn-rate');
let cancelPayment = document.querySelector('#cancel-payment');


// По клику получаем значение из radio/checkbox и сохраняем в переменную
orderBtn.onclick = function(e) {
  e.preventDefault();
  
  let pizzaSizeValue = 0
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
  
  checkedFlag.then(
    accepted => {
      confirmOrder(true, ingredientsArr, pizzaSizeValue);
      accepted.classList.remove('is-warning');
    },

    failed => {
      failed.classList.add('is-warning');
    }
  )
}

/**
* checkIngredients - проверяем кол-во ингредиентов
* @param {array} arr - массив ингредиентов
* @param {string} selected - размер выбранной пиццы
*/

function checkIngredients(arr, selected) {
  return new Promise(function(resolve, reject) {

    let infoMessage = document.querySelector('#warning-ingredients');
    
    if (arr.length >= 3) {
      resolve(infoMessage)
    } else {
      reject(infoMessage)
    }
  })
}

/**
* confirmOrder - выводим сообщение с информацией о заказе и подтверждение
* @param {boolean} status - статус о прохождения валидации на 3 ингрединета
* @param {array} ingredients - массив ингредиентов
* @param {string} size - размер выбранной пиццы
*/

function confirmOrder(status, ingredients, size) {
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
      let hidden = hideForm();
      hidden.then(
        orderForm => {
          orderForm.classList.add('is-none')
        }
      )
      
      let notific = showNotific();
      notific.then(
        ms => {
          setTimeout(() => {
            alert('Your order is being prepared')
          }, ms)
          ms = 1500;
          return ms;
        }
      ).then (
        ms2 => {
          setTimeout (() => {
            alert('The courier took the pizza');
          }, ms2)
          ms2 = 2000;
          return ms2;
        }
      ).then (
        ms3 => {
          setTimeout(() => {
            alert('Courier delivered pizza');
          }, ms3)
          ms3 = 2500;
          return ms3;
        }
      ).then (
        ms4 => {
          setTimeout(() => {
            rateBlock.classList.remove('is-hidden')
          }, ms4)
          return rateBlock;
        }
      ).then (
        rateBlock => {
          setTimeout(() => {
            rateBlock.classList.remove('is-hidden')
          }, 3000)
        }
      )
    } else {
      cancelPayment.classList.add('is-warning')
    }
    
    return agreement;
  }
  
  return agreement;
}

let allOrders = [];

class Order {
  constructor(config) {
    this.size = config.size;
    this.ingredients = config.ingredients;
    this.status = config.status;
  }

  getStatus() {
    return this.status;
  }

  getSize() {
    return this.size;
  }
}

/**
 * hideForm - скрываем форму после подтверждения заказа
 */
function hideForm() {
  return new Promise(function(resolve, reject) {
    resolve(orderForm)
  })
}

/**
 * showNotific - показываем статусы приготовление/доставки заказа
 */
function showNotific() {
  return new Promise(function(resolve, reject) {
    let ms = 1000;
    resolve (ms);
  })
}


for (let i = 0; i < btnRate.length; i++) {
  btnRate[i].onclick = function() {
    rateBlock.classList.add('is-hidden');
    alert('Thank for your feedback!')
  } 
}
