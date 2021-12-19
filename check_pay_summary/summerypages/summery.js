function coupon(){
    var coupon = document.querySelector('#coupon');
    if(coupon.style.display === "none"){
        coupon.style.display = "block";
    }else{
        coupon.style.display = "none";
    }
}


function couponCode(){
    var couText = document.getElementById('couponText').value;

    let couponflag =JSON.parse( localStorage.getItem("CouponFlag"));

    if(couponflag){
        alert("You have already Applied the Coupon");
        return ;
    }
    if(couText == "ZARAHOME"){
        document.getElementById('oops').style.display = "none";
        document.getElementById('apply').style.display = "block";
        document.querySelector('#coupon').style.display = "none";
    }else{
        document.getElementById('apply').style.display = "none";
        document.getElementById('oops').style.display = "block";
        document.querySelector('#coupon').style.display = "none";

        changetotal();
    }
}

let sum = document.getElementById("rText2");
let total =JSON.parse ( localStorage.getItem("Totalpayment") );
console.log(total)
// if(total == null){

//     total =  JSON.parse ( localStorage.getItem("Totalchekout") );
//     console.log(total)
// }

sum.innerHTML = total +  "€*";

let itemstotal = document.getElementById("rText1");
const totalitemslocal =JSON.parse ( localStorage.getItem("Total"));
itemstotal.innerText = totalitemslocal + "€";

function changetotal() {

   total -= total * 0.2;

   sum.innerHTML = total +  "€*";
}

//function for adressess------------------->

let delivery = JSON.parse( localStorage.getItem("Delivery"));
console.log(delivery);
let billing = JSON.parse(localStorage.getItem("Billing"));
const checkFlag =JSON.parse( localStorage.getItem("checkoutFlag"));
let deliverydiv = document.getElementById("addbox2");

console.log(checkFlag)

if(checkFlag){

    displayboxes(billing,1);
    displayboxes(billing,0);

}else{

    console.log("here insede if")
    displayboxes(delivery);
    displayboxes(billing,1);
}

function displayboxes (data, x) {
    console.log("hererearasfaf")
            let divv = document.createElement("div");
            
   
           let ptag1 = document.createElement("p");
           ptag1.innerText = data.Name + " " + data.SurName;
   
           let ptag2 = document.createElement("p");
           ptag2.innerText = data.Doorno;
   
           let ptag3 = document.createElement("p");
           ptag3.innerText = data.Address;
   
           let ptag4 = document.createElement("p");
           ptag4.innerText = data.City;
   
           let ptag5 = document.createElement("p");
           ptag5.innerText = data.Telephone;
            
           divv.append(ptag1, ptag2, ptag3,ptag4, ptag5)

           
           if(data.Type == "Billing" ){

            if(x){
                let outblock = document.getElementById("addbox1");
            outblock.innerHTML = null;
               outblock.append(divv);
            }else{

                deliverydiv.innerHTML = null;
                 deliverydiv.append(divv);
            }

          
           }else {
                          
            deliverydiv.innerHTML = null;
               deliverydiv.append(divv);
             
           }


   
          
        }


function carddisplay () {

    let carddata =JSON.parse( localStorage.getItem("cardPaymentDet"));

    document.getElementsByClassName("card-holder-name")[0].innerText = carddata.cardHolderName;

    document.getElementsByClassName("card-number-box")[0].innerText = carddata.cardName;

    document.getElementsByClassName("exp-month")[0].innerText = carddata.cardMonth;
    document.getElementsByClassName("exp-year")[0].innerText = carddata.cardYear;
}

carddisplay();

let countedItems =JSON.parse( localStorage.getItem("countItem"));
document.getElementById("Item").innerHTML = countedItems + " " + "ITEMS";

//function to append images

let imagediv = document.getElementById("itemDet");
const data =JSON.parse( localStorage.getItem("FROM BAG"));

data.map( (item, index) => {
    if(index != data.length-1) {
        let image =  document.createElement("img");
        image.src = `${item.main_img}`;
         imagediv.append(image);
    }
})

// go to thank you page

function thank() {
    window.location.href = "../../thankyoupage/thanks.html";
}
