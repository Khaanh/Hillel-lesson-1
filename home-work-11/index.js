function filterUpperCase(str) {
  let arr = [];
  
  for (let item of this) {
    if (item === item.toUpperCase()) {
      arr.push(item);
    }
  }

  return arr;
}

let a = 'рЕгИсТр';
filterUpperCase.call(a);