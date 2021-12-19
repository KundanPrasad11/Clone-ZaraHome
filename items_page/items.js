//getting item from local storage
let item = JSON.parse(localStorage.getItem("itemArr")) || [];
let cart = JSON.parse(localStorage.getItem("BAG")) || [];
console.log(cart);

// *************left part****************
var arr1 = item.img;
var arr2 = item.r_img;

var item_left_container = document.getElementById("item_left_container");

for (var i = 0; i < arr1.length; i++) {
    var image = document.createElement("img");
    image.src = arr1[i];
    item_left_container.append(image);
}







// *************right part***************
let item_title = document.getElementById("item_title");
let item_price = document.getElementById("item_price");
let item_ref = document.getElementById("item_ref");
let item_desc = document.getElementById("item_desc");

item_title.textContent = item.name;
item_price.textContent = `${item.price} €`;
item_ref.textContent = item.ref;
item_desc.textContent = item.desc;


let size_price_low = document.querySelectorAll(".size_price_low");
size_price_low.forEach(element => {
    element.textContent = `${item.sPrice} €`;
});
let size_price_high = document.querySelectorAll(".size_price_high");
size_price_high.forEach(element => {
    element.textContent = `${item.dPrice} €`;
});

// ****TWO IMAGES IN BOTTOM ****
var img1 = document.getElementById("img1");

var image1 = document.createElement("img");
image1.src = arr2[0];

var name1 = document.createElement("p");
name1.innerText = item.r_name[0];

var price1 = document.createElement("p");
price1.innerHTML = `${item.r_price[0]} €`

img1.append(image1, name1, price1);

if(arr2.length === 2) {
    var image2 = document.createElement("img");
    image2.src = arr2[1];
    
    var name2 = document.createElement("p");
    name2.innerText = item.r_name[1];
    
    var price2 = document.createElement("p");
    price2.innerHTML = `${item.r_price[1]} €`
    
    img2.append(image2, name2, price2);
}

// ****update btn and filling section****
let add_to_basket_btn = document.getElementById("addToBasket");
let filling_div = document.getElementById("filling");
function updateContainer(price) {
    add_to_basket_btn.innerHTML = `ADD TO BASKET (${price}) &#8364;`;
    filling_div.style.display = "block";
}

// **** on click add to basket buttton****
let goToBasket_btn = document.getElementById("goToBasket");
function displayBtn() {
    // if(add_to_basket_btn.textContent != )
    goToBasket_btn.style.display = "block";
    document.getElementById("addCart").style.right = "0px";
}

console.log(item)
goToBasket_btn.addEventListener("click", function () {
    console.log(item["count"]);
    if (!item["count"]) {
        item["count"] = 1;
    } else {
        item["count"]++;
    }
    localStorage.setItem("itemArr", JSON.stringify(item));
    // adding to cart in local storage

    cart.push(item);
    localStorage.setItem("BAG", JSON.stringify(cart));
    console.log(cart);
    window.location.href = `../cart_page/cart.html`;
})

// side bar

// function addpro() {
//     document.getElementById("addCart").style.right = "0px";
// }
function addRemove() {
    document.getElementById("addCart").style.right = "-400px";
}
function productDetalis() {
    document.getElementById("proDetails").style.right = "0px";
}
function proRemove() {
    document.getElementById("proDetails").style.right = "-400px";
}
function deliveryRetun() {
    document.getElementById("deliveryR").style.right = "0px";
}
function proDelivery() {
    document.getElementById("deliveryR").style.right = "-400px";
}


// login
let loginDisplay = localStorage.getItem("loginDisplay") || null;
console.log(loginDisplay);
if (loginDisplay !== null) {
    document.getElementById("modallogin").innerHTML = loginDisplay;
}

//BASKET
let countItem = localStorage.getItem("countItem") || 0;
document.getElementById("basketCount").innerText = countItem;

//TITLE
document.title = item.name;








