// Variables
const addToCart = document.querySelector('.order-btn-mini');
const cartContainer = document.querySelector('.cart-icon');
const close = document.querySelector('.cart-close');


// EventListeners

loadeventListener ();

function loadeventListener () {

} 

cartContainer.addEventListener('click', () => {
    document.querySelector('.cart-container').style.display = 'block'

});

addToCart.addEventListener('click', () => {
    console.log('clicked')
});


close.addEventListener('click', () => {
    document.querySelector('.cart-container').style.display = 'none'
    
});


// Functions
