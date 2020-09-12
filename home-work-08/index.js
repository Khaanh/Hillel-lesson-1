let frontend = ['I am', 'learing', 'JavaScript', 'by', 'practice', 'every', 'day'];


function customMap(array, cb) {
  
  let item = []

  for (let index = 0; index < array.length; index++) {
    item.push(array[index]);
    
    cb(item, index);
  }

  return item;
}

customMap(frontend, function(item, index) {
  console.log(item[index].length);
})
