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
// startGame();



// ======= *Дополнительное задание* =======

// 1) Переворот числа

/**
 * ф-я getNumber - принимает число
 * @param {number} number 
 * @returns {number} перевернутое число
 */


function getNumber(number) {
  let newNumber = String(number);
  let revertNumber = '';


  for (let i = 1; i < newNumber.length + 1; i++) {
    revertNumber += newNumber[newNumber.length - [i]];
  }

  return revertNumber;
}

getNumber(54321)


// 2) Повторяем циклы.
// Написать функцию generateChessBoard ();

/**
 * Функция generateChessBoard создает строку из # в шахматном порядке. 
 * @param {number} size - размер доски, стандартно number = 8
 * @returns {string}
*/

function generateChessBoard(number = 8) {
  let hashtag = '#';
  let evenRow = '';
  let oddRow = '';

  for (let i = 0; i < number; i++) {

    evenRow += hashtag
    
    if (evenRow.length > 3) {
      console.log(evenRow);
      break;
    }

    for (let j = i; j < number; i++) {

      oddRow += hashtag;

      if (oddRow.length > 2) {
        console.log(oddRow);
        break;
      }
    }

  }

}

// generateChessBoard();