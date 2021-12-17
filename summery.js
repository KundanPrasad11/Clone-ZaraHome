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
    if(couText == "ZARAHOME"){
        document.getElementById('oops').style.display = "none";
        document.getElementById('apply').style.display = "block";
        document.querySelector('#coupon').style.display = "none";
    }else{
        document.getElementById('apply').style.display = "none";
        document.getElementById('oops').style.display = "block";
        document.querySelector('#coupon').style.display = "none";
    }
}