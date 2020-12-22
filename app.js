//strict mode 
'use strict';
// Variables

const addToCart = document.querySelector('.order-btn-mini');
const cartIcon = document.querySelector('.cart-icon');
const close = document.querySelector('.cart-close');
const menu = document.getElementById('menu');
const shoppingCart = document.querySelector('.cart-container')
const show = document.queryCommandEnabled('show-cart');


// SHOW THE ORDERED FOOD
cartIcon.addEventListener('click', () => {
    shoppingCart.classList.toggle('show-cart')
});

// ADD THE FOOD INTO THE CART WHEN ORDERED










