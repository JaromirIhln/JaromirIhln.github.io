
function slideNavBar() {
    var navbar = document.getElementById("slideNavBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
     navbar = document.getElementById("slideNavBar").style.transition = "0.5s";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNavBar() {
    var navbar = document.getElementById("slideNavBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(255,255,255,1)";
    navbar = document.getElementById("slideNavBar").style.transition = "0.5s";
}

