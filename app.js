// Variables
const addToCart = document.querySelector('.order-btn-mini');
const cartContainer = document.querySelector('.cart-icon');
const close = document.querySelector('.cart-close');


// EventListeners
addToCart.addEventListener('click', () => {

});

cartContainer.addEventListener('click', () => {
    document.querySelector('.cart-container').style.display = 'block'
});

close.addEventListener('click', () => {
    document.querySelector('.cart-container').style.display = 'none'
    
});




// Functions
