// Variables

const addToCart = document.querySelector('.order-btn-mini');
const cartContainer = document.querySelector('.cart-icon');
const close = document.querySelector('.cart-close');
const menu = document.getElementById('menu');
const shoppingCart = document.querySelector('cart-container')


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
    // Create an object with food data
    const foodInfo = {
        image: food.querySelector('img').src,
        title: food.querySelector('.card-heading').textContent,
        price: food.querySelector('.order-price').textContent,
        id: food.querySelector('a').getAttribute('data-id')
    };
    addIntoCart(foodInfo)
};

function addIntoCart() {
    const cartItem = document.querySelector('.cart-item');

    cartItem.innerHTML = `
        <img src="${food.image}">
        </div>
        <p class=" food-name">${food.title}</p>
        <div class="food-price">
           ${food.price}
        </div>
        <span class="remove" data-id= "${food.id}">x</span>
    `;
    console.log(cartItem);
    //add to the shopping cart
    shoppingCar.appendChild(cartItem);
}









