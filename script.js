window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.9)";
    } else{
        navbar.style.background = "rgba(0,0,0,0.5)";
    }
});

document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for contacting Social Plus!");
});
