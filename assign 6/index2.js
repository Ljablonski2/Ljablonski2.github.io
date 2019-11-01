var cart = JSON.parse(localStorage.getItem("mycart"));
if (cart == null) {
    cart = [];
}

displayCart();

document.getElementById("remove").addEventListener("click", remove);


// my tutor Nathan taught me how to do the cartHTML += formatting below to make my shopping cart
//HTML code dynamic via javascript instead//

function displayCart() {
    var cartHTML = "";
    for (var i = 0; i < cart.length; i++) {
        cartHTML += '<div class="leftcart">';
        cartHTML +=
            '    <a href="detail2.html"><img src="img/blackberry.jpg" alt="blackberry cinnamon buns" id="bbproduct"/></a>';
        cartHTML += "</div>";

        cartHTML += '<div class="rightcart">';
        cartHTML += "    <p3>" + cart[i].name + "</p3>";
        cartHTML +=
            '    Quantity:<input type="text" readonly="" class="tbx" id="quantbx" value="' +
            cart[i].quantity +
            '"><br>';
        cartHTML +=
            '    Glaze:<input type="text" readonly="" class="tbx" id="glazebx" value="' +
            cart[i].glaze +
            '"><br>';
        cartHTML +=
            '    Price:<input type="text" readonly="" class="tbx" id="pricebx" value="' +
            cart[i].price +
            '"><br>';
        cartHTML +=
            '    <p4 id="p4">Total: <input type="text" readonly="" class="tbx" id="totalcrt" value="' +
            cart[i].quantity * cart[i].price +
            '"></p4>';
        cartHTML += "</div>";
    }

    document.getElementById("cartDisplay").innerHTML = cartHTML;
}


// my TA Sai taught me how to use JSon.stringify to turn the cart items into strings for
// the local storage array.

function remove() {
    cart = [];
    localStorage.setItem("mycart", JSON.stringify(cart));
    displayCart();
    console.log(cart)
}