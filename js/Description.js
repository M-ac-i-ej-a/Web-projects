const Arrow = document.querySelector("#arrowDown");
const Description = document.querySelector(".description");

Arrow.addEventListener('click',() => {
    if(Description.style.display=="block"){
        Description.style.display = "none";
        Arrow.style.transform = ""
        Arrow.style.transitionDuration = "0.3s"
    } else {
        Description.style.display = "block";
        Arrow.style.transitionDuration = "0.3s"
        Arrow.style.transform = "rotate(0.5turn)"
    }
});