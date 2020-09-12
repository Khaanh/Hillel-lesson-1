// ======= *Основное задание* =======
function checkArg(a) {

  if (typeof a == 'number') {
    return 1;
  } else if (typeof a == 'string') {
    return 0;
  } else {
    return -1;
  }

}

// checkArg(2);
// checkArg('b');
// checkArg(true);


// ======= *Дополнительное задание* =======
function substringExists(str, substr) {
  
  let getStr = str.indexOf(substr);

  if ( !(getStr == -1) ) {
    console.log(true);
  } else {
    console.log(false);
  }
  
  console.log(str.indexOf(substr));
}

// substringExists('Frontend', 'nd')