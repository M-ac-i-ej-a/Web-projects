const SortByPrice = document.querySelector("#sort")
const SortView = document.querySelector(".sortByPrice")
const Flick = document.querySelector("#sortFlick")

SortByPrice.addEventListener('click', () => {
    if(SortView.style.display=="flex"){
        SortView.style.display = "none";
        Flick.style.transform = ""
        Flick.style.transitionDuration = "0.3s"
    } else {
        SortView.style.display = "flex";
        SortViewByRange.style.display = "none";
        Flick.style.transitionDuration = "0.3s"
        Flick.style.transform = "rotate(0.5turn)"
        Flick2.style.transform = ""
        Flick2.style.transitionDuration = "0.3s"
    }     
})


