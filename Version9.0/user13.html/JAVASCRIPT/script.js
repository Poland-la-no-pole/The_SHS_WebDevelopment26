// Shopping cart function (User created) /////////////////////
let cart_list = JSON.parse(localStorage.getItem('userCart')) || [];

function addtoCart(selecteditem, pricelisted) {

    const existingItem = cart_list.find(i => i.item === selecteditem);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart_list.push({item: selecteditem, price: pricelisted, quantity: 1});
    }


    
//    for (let i = 0; i > cart_list.length; i++) {
//        const existingItem = cart_list.find()
//        if (selecteditem == existingItem.item) {
//            existingItem.quantity += 1;
//        }
//    }


    localStorage.setItem('userCart', JSON.stringify(cart_list));
    i = 0;
}


// Debugging functions /////////////////////
function checkLocalStorage() {
    let current = localStorage.getItem('userCart');
    alert(current);
}

function emptyLocalStorage() {
    localStorage.clear();
    cart_list.length = 0;
}

// Basic functions /////////////////////
function submitform() {
    alert('Thanks! We will look into your suggestion')
}
