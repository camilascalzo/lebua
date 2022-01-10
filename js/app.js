
const navbar = document.getElementById("navbar");
const par = document.getElementsByClassName("top-p");
const parArr = Array.from(par);
let scrolled = false;

window.onscroll = function() {
    if (window.pageYOffset > 150) {
        navbar.classList.remove("top");
        parArr.forEach(item => { 
            item.classList.remove("top-p");
        });
        // if(!scrolled) {
        //     navbar.style.transform = "translateY(-70px)";
        // }
        // setTimeout(function(){
        //     navbar.style.transform = "translateY(0)";
        //     scrolled = true;
        // }, 200);
    } else {
        navbar.classList.add("top");
        scrolled = false;
        parArr.forEach(item => { 
            item.classList.add("top-p");
        });
    }
};
// smooth scrolling
$("#navbar a").on("click", function (event) {
    if (this.hash !=="") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});
