let frontend = ['I am', 'learing', 'JavaScript', 'by', 'practice', 'every', 'day'];

/**
 * ф-я customMap - принимает массив и возвращает новый масив с длинной каждого элемента, не изменяя старый
 * @param {arr} arr 
 * @returns {arr} newArr
 */

function customMap(arr) {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    newArr.push(arr[i].length);
  }

  return newArr;
}

customMap(frontend);