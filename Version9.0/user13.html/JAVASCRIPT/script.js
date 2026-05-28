let cart_list = [];

function addtoCart(itemid) {
    cart_list.push(itemid);
}

function checkCart() {
    alert(cart_list);
}

// local storage method

function cartUpdate(item) {
    alert(item+' has been added to cart');
    localStorage.setItem('cart',item);
}

function cartCheck() {
    const list = localStorage.getItem('cart');
    alert('This is whats in the cart: '+list);
}

function cartEmpty() {
    localStorage.clear();
}