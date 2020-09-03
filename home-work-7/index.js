/**
 * Функция explainer сделает НОВЫЙ "обяъснительный" массив
 * 
 * @param {array} - массив
 * @returns {array} - новый массив
 */

// "откидывать" все значение, который в логическом контексте false (т.е все негативные)
// если элемент массива число или true - заменить на объект

// Функция explainer должна

// "откидывать" все значение, который в логическом контексте false (т.е все негативные)
// если элемент массива число или true - заменить на объект
//     { type: 'number/boolean', value: число из массива / true}
// если элемент строка - заменить на объект
//     { type: 'string', value: строка из массива, length: длина строки}

 let arr = [10, 'Hello world', null, true , '', false, 255];
 let obj = {};

 function explainer(arr, obj) {

  let result = arr.filter(function (item, index) {
    return Boolean (item)
  })

  for (let i = 0; i < result.length; i++) {
    // console.log(result[i]);

    if ( isNaN(result[i]) ) {
      obj.type = 'string';
      obj.value = result[i];
      obj.length = result[i].length;
      console.log(`result[i]: ${result[i]}`);
      console.log(obj);
    }
  }

  // console.log(result);
  // console.log(obj);
  
 }

 explainer(arr, obj);


 console.log('----------------------');

 console.log(isNaN(10)); //false
 console.log(isNaN('Hello world')); //true
 console.log(isNaN(true)); //false
 console.log(isNaN(255)); //false