'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');

  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

});

function verModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('is-active')
}

function cerrarModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('is-active')
}