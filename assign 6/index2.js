function updatecartpage() {
    localStorage.setItem("cartbtn", cart);

    // count items in my cart
    var buns = 0;

    var i;
    for (i = 0; i < cart.length; i++) {
        var item = cart[i];
        item = item.split(".");
        // replaces string with list
        var g = item[0];
        var q = parseInt(item[1]);
        buns = buns + q;
    }

    // document.getElementById("totalcrt").innerHTML = "cart: " + cart + "<br>Price: $" + (3.99*buns).toFixed(2);


}

document.getElementById("cartbtn").addEventListener("click", function() {
    cart.push(glaze +"."); //.  sugarmilk.4,choc.8,reg.12
    // variable glaze not name
    updatecartpage();
});


document.getElementById("glazedetail").addEventListener("change", function() {
    glaze = document.getElementById("glazedetail").value;
    updatecartpage();
    console.log("glaze");
});

document.getElementById("quantity").addEventListener("change", function(){
    quantity = document.getElementById("quantity").value;
    updatecartpage();
    console.log("quantity");
});


var glaze = "sugarmilk";
var quantity = "1";
var price= 3.99

var cart = localStorage.getItem("cartbtn");
if(cart == null) {
    cart = [];
}
else {
    cart = cart.split(",");
}


// updatecartpage();

updatedeetpage();

function updatedeetpage() {
    console.log("button");
    document.getElementById("deettotal").textContent="total: $" + quantity*3.99;
    console.log('quantity is: ' + quantity);
    document.getElementById("carttext").innerHTML=quantity;

}