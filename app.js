// Variables

const addToCart = document.querySelector('.order-btn-mini');
const cartContainer = document.querySelector('.cart-icon');
const close = document.querySelector('.cart-close');
const menu = document.getElementById('menu');


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
 loadEventListeners();

function loadEventListeners() {
    menu.addEventListener('click', buyFood);
}

function buyFood (event) {
    event.preventDefault();
    //use delegation to find the food added to the car
    if(event.target.classList.contains('order-btn-mini')) {
        //read the food price
        const food = event.target.parentElement.parentElement;


        // read the values
        getFoodInfo(food);
    }
}

//read the HTML information of the selected food

function getFoodInfo(food) {
    console.log(food);
}









