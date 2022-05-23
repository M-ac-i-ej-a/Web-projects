const SortByRange = document.querySelector("#price")
const SortViewByRange = document.querySelector(".sortByRange")
const Flick2 = document.querySelector("#sort2Flick")

SortByRange.addEventListener('click', () => {
    if(SortViewByRange.style.display=="flex"){
        SortViewByRange.style.display = "none";
        Flick2.style.transform = ""
        Flick2.style.transitionDuration = "0.3s"
    } else {
        SortViewByRange.style.display = "flex";
        SortView.style.display = "none";
        Flick2.style.transitionDuration = "0.3s"
        Flick2.style.transform = "rotate(0.5turn)"
        Flick.style.transform = ""
        Flick.style.transitionDuration = "0.3s"
    }     
})


