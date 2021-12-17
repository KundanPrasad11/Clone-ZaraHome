
let redirecthome = () => {

    window.location.href = "home.html"
};

document.getElementById("crossbtn").addEventListener("click", redirecthome);

let Toitem = (e) => {
 
    let value = document.querySelector("input").value;
    value = value.toUpperCase();
    console.log(value);
   if(e.key === "Enter"){
     
    if(value == "DUVET COVERS"){

       window.location.href = "itempage.html"
    }
    
   }

   
}
