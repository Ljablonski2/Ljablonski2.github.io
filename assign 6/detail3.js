var cart = JSON.parse(localStorage.getItem("mycart"));
if (cart == null) {
    cart = [];
}

updateCartText();
updateTotal();

// my tutor Steve worked with me on event listeners which we also learned in lab

document.getElementById("cartbtn").addEventListener("click", addToCart);
document.getElementById("quantity").addEventListener("change", updateTotal);

// my tutor Nathan helped me understand the item creation process that I had been struggling with in lab


// reminder: 10 represents base 10 versus hexadecimal

function addToCart() {
    var name = "Blackberry";
    var quantity = parseInt(document.getElementById("quantity").value, 10);
    var glaze = document.getElementById("glazedetail").value;

    var item = {
        name: name,
        quantity: quantity,
        glaze: glaze,
        price: 3.99
    };

    cart.push(item);
    localStorage.setItem("mycart", JSON.stringify(cart));

    updateCartText();
    updateTotal();
}

function updateCartText() {
    var totalQuantity = 0;
    for (var i = 0; i < cart.length; i++) {
        totalQuantity += cart[i].quantity;
    }
    document.getElementById("carttext").innerHTML = totalQuantity;
}

function updateTotal() {
    var total = document.getElementById("quantity").value * 3.99;
    document.getElementById("deettotal").innerHTML = total;
}
