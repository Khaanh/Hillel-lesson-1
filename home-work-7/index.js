/**
* Функция explainer сделает НОВЫЙ "обяъснительный" массив
* 
* @param {array} - массив
* @returns {array} - новый массив
*/

let arr = [10, 'Hello world', null, true , '', false, 255];

function explainer(arr) {
  let newArr = [];

  // Получаем в result значения, которые в лог. контексте true
  let result = arr.filter(function (item) {
    return Boolean (item);
  })
  
  // перебираем все "положительные" значения из переменной result
  for (let i = 0; i < result.length; i++) {
    let objBoolean = {};
    let objNumber = {};
    let objStr = {};

    if (typeof (result[i]) == 'string') {
      objStr.type = 'String',
      objStr.value = result[i],
      objStr.length = result[i].length,
      newArr.push(objStr)
    } else if (typeof (result[i]) == 'number') {
      objNumber.type = 'Number',
      objNumber.value = result[i]
      newArr.push(objNumber)
    } else if (result[i] === true) {
      objBoolean.type = 'Boolean',
      objBoolean.value = result[i]
      newArr.push(objBoolean)
    }
  }
  
  return newArr
}

explainer(arr);

