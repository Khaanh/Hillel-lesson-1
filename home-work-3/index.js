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
  let counter = 0;
  let colors;

  while (counter < 3) {
    colors = prompt('Угадай один из цветов: red, black, blue, pink, green', '');
    
    if (colors == COLOR_PINK) {
      alert(`Вы угадали: ${COLOR_PINK}`)
      break;
    }

    counter++;
  }
}
// guessColor();