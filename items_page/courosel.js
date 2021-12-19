let coutop = document.getElementById("coutop")


    let closingbtn = document.getElementById("closingbtn")
    closingbtn.addEventListener("click", closecourosel)

    function closecourosel() {
        coutop.style.display = "none";

        window.location.href = "../items_page/items.html"

    }
    // courosel
    var slider = document.querySelector(".slider")
    var courosel = document.querySelector(".courosel")

    var left = document.querySelector(".left");
    var right = document.querySelector(".right")

    var direction;


    // left arrow
    left.addEventListener("click", function () {
        if (direction == -1) {
            slider.appendChild(slider.firstElementChild);
            direction = 1;
        }

        courosel.style.justifyContent = "flex-end";
        slider.style.transform = "translate(20%)";

    });
    // right arrow
    right.addEventListener("click", function () {


        direction = -1;


        courosel.style.justifyContent = "flex-start";
        slider.style.transform = "translate(-20%)";

    });

    // slider part
    slider.addEventListener("transitionend", function () {
        if (direction == -1) {
            slider.appendChild(slider.firstElementChild);
        } else if (direction == 1) {
            slider.prepend(slider.lastElementChild)
        }


        slider.style.transition = "none";
        slider.style.transform = "translate(0%)";
        setTimeout(function () {
            slider.style.transition = "all 0.5s";
        })

    })