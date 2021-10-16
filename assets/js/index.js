AOS.init({
    offset:200,
    duration:1000,
});

// <!-- ****************************** to-Top scroll *******************************  -->

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
if(window.pageYOffset > 120)
{
toTop.classList.add("active"); 
}
else
{
toTop.classList.remove("active");
}

});