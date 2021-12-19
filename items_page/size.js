let popbox=document.getElementById("popbox")
    
    let sizeguide=document.getElementById("sizeguide")
    let closingsize=document.getElementById("closingsize")
    
    // for open popup
    let sizeguideopen=(e)=>{
        e.preventDefault()
        popbox.style.display="block";
    }
    
    sizeguide.addEventListener("click",sizeguideopen)
    
    // for closing popup
    let sizeguideclose=()=>{
        popbox.style.display="none";
    }
    closingsize.addEventListener("click",sizeguideclose)
    
    // clicing outside it disappear
    let outsideclick=(e)=>{
        if(e.target == popbox){
            popbox.style.display="none"
        }
    }
    window.addEventListener("click",outsideclick)