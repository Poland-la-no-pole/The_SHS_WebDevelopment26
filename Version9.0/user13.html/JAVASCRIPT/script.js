// User created function: Shopping cart
const cart_list = JSON.parse(localStorage.getItem('userCart')) || [];

function addtoCart(itemid) {
    cart_list.push(itemid);

    localStorage.setItem('userCart', JSON.stringify(cart_list));

}

function checkLocalStorage() {
    let current = localStorage.getItem('userCart');
    alert(current)
}

// basic functions
function submitform() {
    alert('Thanks! We will look into your suggestion')
}
