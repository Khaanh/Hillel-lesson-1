let orderForm = document.querySelector('#form-order');
let pizzaSize = document.querySelectorAll('.size-input');
let ingredientsList = document.querySelectorAll('.ingredients-input');
let orderBtn = document.querySelector('#btn-order');


let ingredientsArr = [];
// По клику получаем значение из radio и сохраняем в переменную
orderBtn.onclick = function(e) {
  let pizzaSizeValue = 0;
  // for (let i = 0; i < pizzaSize.length; i++) {
  //   if (pizzaSize[i].checked == true) {
  //     pizzaSizeValue = pizzaSize[i].value;
  //     console.log(pizzaSizeValue);
  //   }
  // }

  for (let i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i].checked == true) {
    }
    ingredientsArr.push(ingredientsList[i]);
    console.log(ingredientsList[i]);
    console.log(ingredientsArr);
  }
  e.preventDefault();
}
