var cNumberI = document.querySelector('.card-number-input');
var cNumberB = document.querySelector('.card-number-box');
cNumberI.oninput = () => {
    cNumberB.innerText = cNumberI.value;
}

var cHolderI = document.querySelector('.card-holder-input');
var cHolderB = document.querySelector('.card-holder-name');
cHolderI.oninput = () => {
    cHolderB.innerText = cHolderI.value;
}

var cMonthI = document.querySelector('.month-input');
var cMonthB = document.querySelector('.exp-month');
cMonthI.oninput = () => {
    cMonthB.innerText = cMonthI.value + " /";
}

var cYearI = document.querySelector('.year-input');
var cYearB = document.querySelector('.exp-year');
cYearI.oninput = () => {
    cYearB.innerText = cYearI.value;
}

var cCvvI = document.querySelector('.cvv-input');
var cFontB = document.querySelector('.front');
var cBackB = document.querySelector('.back');
cCvvI.onmouseenter = () => {
    cFontB.style.transform = 'perspective(1000px) rotateY(-180deg)';
    cBackB.style.transform = 'perspective(1000px) rotateY(0deg)';
}

cCvvI.onmouseleave = () => {
    cFontB.style.transform = 'perspective(1000px) rotateY(0deg)';
    cBackB.style.transform = 'perspective(1000px) rotateY(180deg)';
}

var cCvvB = document.querySelector('.cvv-box');
cCvvI.oninput = () => {
    cCvvB.innerText = cCvvI.value;
}

function coupon() {
    var coupon = document.querySelector('#coupon');
    if (coupon.style.display === "none") {
        coupon.style.display = "block";
    } else {
        coupon.style.display = "none";
    }
}

function couponCode() {
    var couText = document.getElementById('couponText').value;
    if (couText == "ZARAHOME") {
        document.getElementById('oops').style.display = "none";
        document.getElementById('apply').style.display = "block";
        document.querySelector('#coupon').style.display = "none";

        changetotal();

    } else {
        document.getElementById('apply').style.display = "none";
        document.getElementById('oops').style.display = "block";
        document.querySelector('#coupon').style.display = "none";
    }
}

function continuePay() {
    var cardDetails = {
        cardName: cNumberI.value,
        cardHolderName: cHolderI.value,
        cardMonth: cMonthI.value,
        cardYear: cYearI.value,
    }
    localStorage.setItem("cardPaymentDet", JSON.stringify(cardDetails));

    window.location.href = "../summerypages/summery.html";
}


//function by nagendra -------->


let sum = document.getElementById("rText2");
let total =JSON.parse ( localStorage.getItem("Totalchekout") );

total = total.toFixed(2);
sum.innerHTML = total +  "€*";

let itemstotal = document.getElementById("rText1");
const totalitemslocal =JSON.parse ( localStorage.getItem("Total"));
itemstotal.innerText = totalitemslocal + "€";

localStorage.setItem("Totalpayment",JSON.stringify( total));

function changetotal() {

   total -= total * 0.2;
   total = total.toFixed(2)

   sum.innerHTML = total +  "€*";
   
   localStorage.setItem("Totalpayment",JSON.stringify( total));
   localStorage.setItem("CouponFlag",JSON.stringify( "True"));
}


let countedItems =JSON.parse( localStorage.getItem("countItem"));
document.getElementById("Item").innerHTML = countedItems + " " + "ITEMS";