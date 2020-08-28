// ======= *Основное задание* =======

function sum() {
  let number = +prompt('Введите число больше 10:', '');
  let sum = 0;
  
  if (number > 10) {
  
    for (let i = 1; i < number + 1; i++) {
      sum += i;
      console.log(i);
    }
  
    console.log(`Сумма чисел: ${sum}`);
  }
}
// sum();



// ======= *Дополнительное задание* =======

const COLOR_PINK = 'pink';

function guessColor() {
  let counter = 3;
  let colors;
  let checked;
  
  while (counter > 0) {
    colors = prompt('Угадай один из цветов: red, black, blue, pink, green', '');
    
    if (colors == COLOR_PINK) {
      checked = colors;
    } 
    counter--;
  }

  if (checked == COLOR_PINK) {
    alert(`Вы угадали: ${checked}`);
  } else {
    alert('Вы не угадали')
  }
}
// guessColor();