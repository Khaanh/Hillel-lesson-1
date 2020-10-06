let orderForm = document.querySelector('#form-order');
let pizzaSize = document.querySelectorAll('.size-input');
let ingredientsList = document.querySelectorAll('.ingredients-input');
let orderBtn = document.querySelector('#btn-order');


// По клику получаем значение из radio/checkbox и сохраняем в переменную
orderBtn.onclick = function(e) {
  e.preventDefault();
  
  let pizzaSizeValue = 0
      ingredientsArr = [];
  
  // Выбор размера пиццы
  for (let i = 0; i < pizzaSize.length; i++) {
    if (pizzaSize[i].checked == true) {
      pizzaSizeValue = pizzaSize[i].value;
      console.log(pizzaSizeValue);
    }
  }
  
  // Выбор ингредиентов
  for (let i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i].checked == true) {
      ingredientsArr.push(ingredientsList[i]);
    }
  }
  
  checkIngredients(ingredientsArr, pizzaSizeValue)
}

/**
* checkIngredients - проверяем кол-во ингредиентов
* @param {array} arr - массив ингредиентов
* @param {string} selected - размер выбранной пиццы
*/

function checkIngredients(arr, selected) {
  let infoMessage = document.querySelector('.info-block');
  
  if (arr.length >= 3) {
    infoMessage.classList.remove('is-warning')
    return confirmOrder(true, arr, selected)
  } else {
    infoMessage.classList.add('is-warning')
  }
}

/**
* confirmOrder - выводим сообщение с информацией о заказе и подтверждение
* @param {boolean} status - статус о прохождения валидации на 3 ингрединета
* @param {array} ingredients - массив ингредиентов
* @param {string} size - размер выбранной пиццы
*/

function confirmOrder(status, ingredients, size) {
  let arrDescr = [],
      strArrDescr = '',
      agreement = false;
  
  for (let i = 0; i < ingredients.length; i++) {
    arrDescr.push(ingredients[i].value);
  }
  strArrDescr = arrDescr.join(', ');
  
  if (status) {
    return agreement = confirm(`Your order: ${size} pizza with ${strArrDescr}, all right?`)
  }

  return agreement;
}


// let test = document.querySelector('#test');

// test.onclick = function() {
//   let a = first();

//   second(a)
// }

// function first() {
//   alert('first');
//   return false;
// }

// function second(stat) {
//   if (stat) {
//     alert('second')
//   }
// }