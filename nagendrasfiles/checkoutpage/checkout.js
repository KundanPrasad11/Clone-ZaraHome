


let changeptag = document.getElementById("addchange")
const balckbox = document.getElementById("blackdiv");
let deliverydiv = document.getElementById("emergediv");
const dellocal =JSON.parse ( localStorage.getItem("Delivery"));


 let popup  = (e) => {

    

    if(e.target.checked){
     
        changeptag.innerText = "DELIVERY ADDRESS";
        deliverydiv.innerHTML = null;
    }else{

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
         
        
      let advertizediv = document.createElement("div");
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

 //close function 
  document.getElementById("billing").addEventListener("change", popup);
 

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
    displayboxes(dellocal);

 }
 document.getElementById("popacceptbtn").addEventListener("click", store);
//-------------------------------------------------------------------------------->
 let storebill  = () => {

   let billaddress = {

     Name: document.getElementById("billName").value,
     SurName : document.getElementById("billsurname").value,
     Address : document.getElementById("billadd").value,
     Doorno :  document.getElementById("billdoor").value,
     City : document.getElementById("billcity").value,
     Telephone : document.getElementById("billtele").value,
     Type : "Billing",
   }

   localStorage.setItem("Billing", JSON.stringify( billaddress));
}
const testbtn = document.getElementById("addcontbtn");
     testbtn.addEventListener("click", storebill);


     function displayboxes (data) {
 console.log("hererearasfaf")
         let div = document.createElement("div");
          
        let ptag1 = document.createElement("p");
        ptag1.innerText = data.Name + " " + data.Surname;

        let ptag2 = document.createElement("p");
        ptag1.innerText = data.Doorno;

        let ptag3 = document.createElement("p");
        ptag1.innerText = data.Address;

        let ptag4 = document.createElement("p");
        ptag1.innerText = data.City;

        let ptag5 = document.createElement("p");
        ptag1.innerText = data.Telephone;
         
        div.append(ptag1, ptag2, ptag3,ptag4, ptag5)
        if(data.Type == "Delivery"){

            deliverydiv.append(div)
        }

        console.log(deliverydiv)
     }

   