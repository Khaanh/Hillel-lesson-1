/**
* checkIngredients - проверяем кол-во ингредиентов
* @param {array} arr - массив ингредиентов
* @param {string} selected - размер выбранной пиццы
*/
export function checkIngredients(arr, selected) {
  let infoMessage = document.querySelector('#warning-ingredients');
  let checked = false;
  
  if (arr.length >= 3) {
    infoMessage.classList.remove('is-warning');
    return checked = true
  } else {
    infoMessage.classList.add('is-warning');
  }
  
  return checked;
}