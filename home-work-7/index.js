/**
 * Функция explainer сделает НОВЫЙ "обяъснительный" массив
 * 
 * @param {array} - массив
 * @returns {array} - новый массив
 */

 let arr = [10, 'Hello world', null, true , '', false, 255];
 let obj = {};
 let objStr = {};
 let objNumber = {}

 function explainer(arr, objNumber, objStr) {
  console.log(arr);
  // Получаем в result значения, которые в лог. контексте true
  let result = arr.filter(function (item) {
    return Boolean (item)
  })
  let newArr = [];

  
  // перебираем все "положительные" значения из переменной result
  for (let i = 0; i < result.length; i++) {

    if (typeof (result[i]) == 'string') {
      console.log(result[i]);
      objStr.type = 'string',
      objStr.value = result[i],
      objStr.length = result[i].length,
      console.log(objStr);
      newArr.push(objStr)
    } else if ((typeof (result[i]) == 'number') || typeof (result[i]) == 'boolean') {
      console.log(result[i]);
      objNumber.type = 'number/boolean',
      objNumber.value = result[i],
      console.log(objNumber);
      newArr.push(objNumber)
    } else {
      return;
    }
  }

  return newArr
 }

explainer(arr, objNumber, objStr);