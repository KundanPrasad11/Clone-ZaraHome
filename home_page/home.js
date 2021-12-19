let home_content = document.querySelector("#home_content");
home_content.addEventListener("click", function () {
    window.location.href = "../story_page/story.html";
})









// lllllllllllllllllllllllllllllllllllllllllllllllllllllll

// sign in part

let modallogin = document.getElementById("modallogin")

let closebtn = document.getElementById("closingbtna")

let modalbox = document.getElementById("modalbox")


modallogin.addEventListener("click", openmodal)

closebtn.addEventListener("click", closemodal)

window.addEventListener("click", outsideclick)


function openmodal() {
    console.log("dhhfiut")
    modalbox.style.display = "block"
}

function closemodal() {

    modalbox.style.display = "none"
}
function outsideclick(e) {
    if (e.target == modalbox) {
        modalbox.style.display = "none"
    }
}

// signup part--------------------------------------

let newaccountbtn = document.getElementById("newaccountbtn")

let closebtn1 = document.getElementById("closingbtn1")

let modalbox1 = document.getElementById("modalbox1")





newaccountbtn.addEventListener("click", openmodal1)

closebtn1.addEventListener("click", closemodal1)
window.addEventListener("click", outsideclick1)


function openmodal1() {

    modalbox1.style.display = "block";
    modalbox.style.display = "none";

}
function closemodal1() {

    modalbox1.style.display = "none";
    modalbox.style.display = "block";
}

function outsideclick1(e) {
    if (e.target == modalbox1) {
        modalbox1.style.display = "none"
    }
}


//  company modal-------------------------------------------------------
let closebtn2 = document.getElementById("closingbtn2")
let modalbox2 = document.getElementById("modalbox2")

// radiobuuttons
let radiobutton = document.querySelectorAll("input[name='gp1']");
console.log(radiobutton)
let findselected = () => {
    let selectedradio = document.querySelector("input[name='gp1']:checked").value;
    console.log(selectedradio)

    if (selectedradio == "com") {
        modalbox1.style.display = "none";
        modalbox2.style.display = "block";

    } else if (selectedradio == "ind") {
        modalbox2.style.display = "none";
        modalbox1.style.display = "block";
    }
}


radiobutton.forEach(radiobtn => {
    radiobtn.addEventListener("change", findselected)
})



closebtn2.addEventListener("click", closemodal2)
window.addEventListener("click", outsideclick2)


function closemodal2() {

    modalbox2.style.display = "none";
    // modalbox.style.display="block";
}
function outsideclick2(e) {
    if (e.target == modalbox1) {
        modalbox1.style.display = "none"
    }
}















var users = JSON.parse(localStorage.getItem("usersignupdta")) || []

// readsignup data values

let signname = document.getElementById("signname");
let signemail = document.getElementById("signemail");
let signpassword = document.getElementById("signpassword")

let signname1 = document.getElementById("signname1");
let signemail1 = document.getElementById("signemail1");
let signpassword1 = document.getElementById("signpassword1")


// signupbutton
let createaccount = document.getElementById("createaccount")
let createaccount1 = document.getElementById("createaccount1")
// loginbutton
let loginbtn = document.getElementById("loginbtn")

// signup call function
createaccount.addEventListener("click", signupdata)
createaccount1.addEventListener("click", signupdata1)
// login call function
loginbtn.addEventListener("click", logindata)




function signupdata(e) {
    e.preventDefault()
    // console.log("hai")
    if (signname.value == "" || signemail.value == "" || signpassword.value == "") {
        alert("invalid credentials")
    } else {
        let userdetails = {

            name: signname.value,
            email: signemail.value,
            password: signpassword.value
        }
        users.push(userdetails)
        console.log(users)
        localStorage.setItem("usersignupdta", JSON.stringify(users))
        checkuserdata(users)
    }


}

function signupdata1(e) {
    e.preventDefault()
    // console.log("hai")
    if (signname1.value == "" || signemail1.value == "" || signpassword1.value == "") {
        alert("invalid credentials")
    } else {
        let userdetails = {

            name: signname1.value,
            email: signemail1.value,
            password: signpassword1.value
        }
        users.push(userdetails)
        console.log(users)
        localStorage.setItem("usersignupdta", JSON.stringify(users))
        checkuserdata1(users)
    }


}


function logindata(e) {
    e.preventDefault()
    let count = 0;
    let inputemail = document.getElementById("inputemail").value;
    let inputpass = document.getElementById("inputpass").value;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email !== inputemail || users[i].password !== inputpass) {
            count++;
            if (count == users.length) {
                alert("Login not Successfully");
            }
        } else {

            modallogin.innerHTML = users[i].name;
            localStorage.setItem("loginDisplay", users[i].name);
            modalbox.style.display = "none";
            let countItem = localStorage.getItem("countItem") || 0;
            document.getElementById("basketCount").innerText = countItem;

        }

    }

}






function checkuserdata(users) {

    users.forEach(ele => {

        if (ele.name == signname.value && ele.password == signpassword.value) {

            // modallogin.innerHTML=ele.name;
            modalbox1.style.display = "none";
        }
    });
}



function checkuserdata1(users) {

    users.forEach(ele => {

        if (ele.name == signname1.value && ele.password == signpassword1.value) {

            // modallogin.innerHTML=ele.name;
            modalbox2.style.display = "none";
        }
    });
}





// llllllllllllllllllllllllllllllllllllllllllllllllllllll

//LOGIN
let loginDisplay = localStorage.getItem("loginDisplay") || null;
console.log(loginDisplay);
if (loginDisplay !== null) {
    document.getElementById("modallogin").innerHTML = loginDisplay;
}

//BASKET
let countItem = localStorage.getItem("countItem") || 0;
document.getElementById("basketCount").innerText = countItem;

