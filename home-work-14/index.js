function Human(config) {
  this.name = config.name;
  this.surname = config.surname;
  this.age = config.age;

  this.getFullName = function() {
    let fullName = this.name + ' ' + this.surname;
    return fullName;
  }

  this.setFullName = function(fullName) {
    console.log();
  }
}


let person = new Human({
  name: 'Khanh',
  surname: 'Nguyen'
});
