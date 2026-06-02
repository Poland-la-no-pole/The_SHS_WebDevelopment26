// Shopping cart function (User created) /////////////////////
let cart_list = JSON.parse(localStorage.getItem('userCart')) || [];

function addtoCart(selecteditem, pricelisted) {

    const existingItem = cart_list.find(i => i.item === selecteditem);

    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += pricelisted;
        alert
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
}


// Debugging functions /////////////////////
function checkLocalStorage() {
    let current = localStorage.getItem('userCart');
    alert(current);
    alert('list length: '+cart_list.length);
}

function emptyLocalStorage() {
    localStorage.clear();
    cart_list.length = 0;
}

// Load Cart /////////////////////////
function loadCart() {
    alert('loaded');
    let contents = document.getElementById('listdisplay').innerHTML;
    const container = document.getElementById("listdisplay");
    container.innerHTML = "<p>Content injected successfully!</p>";

    // FOR Mr Teut: The function calling from cart.html works, but the function stops at writing "Content injected successfully". The alert inside of the for loop never activates------
    for (let i = 0; i > cart_list.length; i++) {
        alert('Iterating through the sequence');
        contents += '$'+cart_list[i].price+' Item: '+cart_list[i].item+' x'+cart_list[i].quantity;
        if (cart_list.length > i) {
            contents += '\n';
        }
    }
}

// Basic functions /////////////////////
function submitform() {
    alert('Thanks! We will look into your suggestion')
}
