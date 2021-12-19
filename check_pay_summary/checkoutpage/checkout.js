


let changeptag = document.getElementById("addchange")
const balckbox = document.getElementById("blackdiv");
let deliverydiv = document.getElementById("emergediv");
const dellocal =JSON.parse ( localStorage.getItem("Delivery"));
const billlocal =JSON.parse ( localStorage.getItem("Billing"));
let advertizediv = document.createElement("div");
let outblock = document.getElementById("extradivbillblock");
const checkFlag =JSON.parse( localStorage.getItem("checkoutFlag"));

if(billlocal !== null){

   displayboxes(billlocal);
   document.getElementById("dummybillnulldiv").style.display = "none";
   document.getElementById("billinglabel").innerText = "Send to the billing address";
}
localStorage.setItem("checkoutFlag", JSON.stringify(true));

// this is checkbox  function------------->
 let popup  = (e) => { 

    if(e.target.checked){
     
        changeptag.innerText = "DELIVERY ADDRESS";
        deliverydiv.innerHTML = null;
         console.log("herer at checked")
       
        if(billlocal !== null){
              
         displayboxes(billlocal);
         console.log(billlocal)
           document.getElementById("dummybillnulldiv").style.display = "none";
        }

        localStorage.setItem("checkoutFlag", JSON.stringify(true));
    }else{

      localStorage.setItem("checkoutFlag", JSON.stringify(false));

        changeptag.innerText = "BILLING ADDRESS";
       
        
     deliverydiv.innerHTML = null;

     
    let ptag = document.createElement("p");
    ptag.innerText = "DELIVERY ADDRESS";
    ptag.setAttribute("class", "highlight extras")

    let newadd = document.createElement("button");
    newadd.innerText = "NEW ADDRESS";
    newadd.setAttribute("class", "newaddbtn")

     deliverydiv.append(ptag, newadd)

     //function for changing advertizetag
     console.log(dellocal)
     if(dellocal == null){
         
        
      
      advertizediv.innerText = "Please add a delivery address";
      advertizediv.setAttribute("class", "pinkadv")
      deliverydiv.append( advertizediv);

       }else{
          
         displayboxes(dellocal);
       }

     newadd.addEventListener("click", () => {
           
        balckbox.style.pointerEvents ="auto";
           balckbox.style.opacity = "1";
          
     });
    }



    
 }

 
  document.getElementById("billing").addEventListener("change", popup);

//   if(!checkFlag){
//    document.getElementById("billing").checked = false;
//    popup( );
// }
 
//close function ------------------->
 let close = ( ) => {
    
    
    balckbox.style.opacity = "0";
           balckbox.style.pointerEvents ="none";
           console.log("close it")
    
 }


 document.getElementById("crossbtn").addEventListener("click", close);

 //function for adding address to local storage; (ACCEPT BUTTON)

 let store  = () => {

    let deladdress = {

      Name: document.getElementById("delName").value,
      SurName : document.getElementById("delsurname").value,
      Address : document.getElementById("deladd").value,
      Doorno :  document.getElementById("deldoor").value,
      City : document.getElementById("delcity").value,
      Telephone : document.getElementById("deltele").value,
      Type : "Delivery",

    }

    localStorage.setItem("Delivery", JSON.stringify( deladdress));
    close();
    advertizediv.style.display = "none";
  
    displayboxes(deladdress);

 }
 document.getElementById("popacceptbtn").addEventListener("click", store);
//-------------------------------------------------------------------------------->
 let storebill  = () => {

   let name = document.getElementById("billName").value;
   let surname = document.getElementById("billsurname").value;
   let add = document.getElementById("billadd").value;
   let city = document.getElementById("billcity").value;
   let tele = document.getElementById("billtele").value;
   let door = document.getElementById("billdoor").value;

 
   if(billlocal == null){

 if(name == "" || surname == "" || add == "" || city == "" || tele == ""){

      alert("Please Fill the required fields(*)");
      return ;
   }

   }else{

      window.location.href = "../paymentpages/payment.html";
   }
  

   let billaddress = {

     Name: name,
     SurName : surname,
     Address : add,
     Doorno :  door,
     City :  city,
     Telephone : tele,
     Type : "Billing",
   }

   localStorage.setItem("Billing", JSON.stringify( billaddress));

   window.location.href = "../paymentpages/payment.html";
}
const testbtn = document.getElementById("addcontbtn");


if(billlocal == null){

    testbtn.addEventListener("click", storebill);
}else{
   
   testbtn.addEventListener("click", () => {

      window.location.href = "../paymentpages/payment.html";
   });
   

}

    

    

//<--------------------continue button top ------------------>

     function displayboxes (data) {
 console.log("hererearasfaf")
         let divv = document.createElement("div");
          divv.setAttribute("class", "newdelblock");

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
        if(data.Type == "Delivery"){

            deliverydiv.append(divv)
        }else{
             
        
            outblock.innerHTML = null;
            outblock.append(divv);
        }

        console.log(divv)
     }


     //function of displacing prices in pricediv ------- from local storage ----->
   

     let totalprice = JSON.parse( localStorage.getItem("Total") );
     document.getElementById("totallocal").innerText = totalprice + " €";
     totalprice = +totalprice;
     totalprice += 45 + 56.43;
     totalprice = totalprice.toFixed(2);
     localStorage.setItem("Totalchekout", totalprice);
     document.getElementById("oritotal").innerText = totalprice + " €";

     let countedItems =JSON.parse( localStorage.getItem("countItem"));
    document.getElementById("NumItems").innerHTML = countedItems + " " + "ITEMS";


     // <-----------------Radio Buttons----------->

     let individual = document.getElementById("indivi");
     let company = document.getElementById("company");
     let inppur = document.getElementById("changein");
     let vatin = document.getElementById("vatin");
 
     individual.addEventListener("click", OnOff);
     company.addEventListener("click", OffOn);

    function OnOff( ) {

      if(individual.checked){
         company.checked = false;
      }
       inppur.placeholder = "Tax ID number";
       vatin.style.display = "none";
    } 

    function OffOn (){
         
      if(company.checked){
         individual.checked = false;
      }
      inppur.placeholder = "Company Name";
      vatin.style.display = "block";
    }

  




   
   