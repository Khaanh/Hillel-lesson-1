import {rateBlock, btnRate} from './vars.js';
export {showNotific, orderStatus, tookPizza, deliveredPizza, showRate}

function showNotific() {

  orderStatus();
  tookPizza();
  deliveredPizza();
  showRate();
}

function orderStatus() {
  setTimeout(() => {
    alert('Your order is being prepared')
  }, 1000)
}

function tookPizza() {
  setTimeout (() => {
    alert('The courier took the pizza');
  }, 1500)
}

function deliveredPizza() {
  setTimeout(() => {
    alert('Courier delivered pizza');
  }, 2000)
}

function showRate() {
  setTimeout(() => {
    rateBlock.classList.remove('is-hidden')
  }, 2500)
}

for (let i = 0; i < btnRate.length; i++) {
  btnRate[i].onclick = function() {
    rateBlock.classList.add('is-hidden');
    alert('Thank for your feedback!')
  } 
}