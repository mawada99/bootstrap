var topBtn = document.getElementById("topBtn")
window.addEventListener("scroll", function () {
    console.log("wndow is scrolling")
    if (document.documentElement.scrollTop > 300)
        topBtn.style.display = "block"
    else topBtn.style.display = "none"


})