// ======= *Основное задание* =======

// ф-я генерации случайного числа от 0 до 100
function generateRandom() {
  let getRandom = Math.floor(Math.random() * 100);
  return getRandom;
}

// ф-я вывода ко-во попыток
function logInfo(counter) {
  if (counter == 1) {
    console.log(`Осталось последняя попытка`);
    return;
  } else {
    console.log(`Осталось ${counter} попыток`);
  }

  return;
}

// ф-я начало игры
function startGame() {
  let randomNumber = generateRandom(); // записываем результат ф-и generateRandom()
  let gameOver = true; // устанавливаем флаг для определения выигрыша/проигрыша
  let counter = 5; // кол-во попыток
  console.log(randomNumber);
  
  while ( counter > 0 ) {
    let getUserNumber = prompt('Введите число:', '');
    let showCounter = counter - 1;
    
    if ( getUserNumber == randomNumber ) {
      console.log('Угадал');
      gameOver = false;
      break;
    } else if ( getUserNumber == null ) {
      break;
    } else if ( getUserNumber > randomNumber ) {
      console.log('Многовато...');
      logInfo(showCounter)
    } else if ( getUserNumber < randomNumber ) {
      console.log('Маловато...');
      logInfo(showCounter)
    } else if ( isNaN(getUserNumber) ) {
      console.log('Требуется числовое значение');
      logInfo(showCounter)
    } else {
      console.log('Неизвестное значение');
    }
    
    counter--;
  }

  // если проигрыш - выводим загаданное число
  if ( gameOver ) {
    console.log(`Было загадано число: ${randomNumber}`);
  }
}
startGame();














// ======= *Дополнительное задание* =======
