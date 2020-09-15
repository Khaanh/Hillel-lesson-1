function getPasswordFromUser(success, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") success();
  else fail();
}

let user = {
  name: 'Andrew',

  loginSuccess() {
    alert(`${this.name} logged in`);
    console.log(this);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

getPasswordFromUser(user.loginSuccess.bind(user), user.loginFail.bind(user));

// Объяснение:

// Функция getPasswordFromUser принимала user.loginSuccess/loginFail и выполняла методы объекта соответственно, но у нее небыл привязан контекст. А точнее, контекстом был глобальный объект window, у которого ключ name = '';