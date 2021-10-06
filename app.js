function viewImage(id) {
    document.getElementById("absolute-image").style.display = "flex";
    document.getElementById("big-img")["src"] = document.getElementById(id)["src"];
    document.getElementById("body").style.overflow = "hidden";
}
document.getElementById("close-icon").onclick = function () {
    document.getElementById("body").style.overflow = "visible";
    document.getElementById("absolute-image").style.display = "none";
};
