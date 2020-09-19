function filterUpperCase(str) {
  let arr = [];
  
  for (let item of this) {
    if (item === item.toUpperCase()) {
      arr.push(item);
    }
  }

  let newArr = arr.filter(item => item.length > 0)

  return newArr;
}

let a = 'рЕгИсТр';
filterUpperCase.call(a);