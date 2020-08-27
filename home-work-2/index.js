// let op1 = +prompt('Введите первое число:', ''),
//     op2 = +prompt('Введите второе число:', ''),
//     sign = prompt('знак между ними:', '');

// switch (sign) {
//   case '-': {
//     console.log(op1 - op2);
//     break;
//   }

//   case '+': {
//     console.log(op1 + op2);
//     break;
//   }

//   case '/': {
//     console.log(op1 / op2);
//     break;
//   }

//   case '*': {
//     console.log(op1 * op2);
//     break;
//   }

//   case '**': {
//     console.log(op1 ** op2);
//     break;
//   }

//   case '%': {
//     console.log(op1 % op2);
//     break;
//   }

//   default: {
//     console.log('Что-то пошло не так...');
//   }
// }

// ========== *Дополнительное задание* ==========


let sub = function(n1, n2) {
  console.log(n1 - n2);
}

let sum = function(n1, n2) {
  console.log(n1 + n2);
}

let mul = function(n1, n2) {
  console.log(n1 * n2);
}

let div = function(n1, n2) {
  console.log(n1 / n2);
}

function calculate(n1, n2, sign) {
  n1 = +prompt('Введите число n1:', ''),
  n2 = +prompt('Введите число n2:', ''),
  sign = prompt('Введите арифметический знак:', '');
  
  console.log(n1);
  console.log(n2);
  console.log(sign);
  if (sign == '-') {
    sub(n1, n2);
  } else if (sign == '+') {
    sum(n1, n2);
  } else if (sign == '*') {
    mul(n1, n2);
  } else if (sign == '/') {
    div(n1, n2)
  } else if (sign == '') {
    console.log(' Вы забыли ввести знак ');
  } else if ( !((typeof n1) == 'number') ) {
    console.log('n1 - Не число');
  }
}
// calculate();
