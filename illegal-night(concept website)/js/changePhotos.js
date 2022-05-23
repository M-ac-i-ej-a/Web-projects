const leftPhotos = document.querySelectorAll("#view");
const mainPhoto = document.querySelector("#main");

const up = leftPhotos[0]
const down = leftPhotos[1]

up.addEventListener('click',() => {
    up.style.opacity = 0.7;
    down.style.opacity = 1;
    mainPhoto.src = "photos/przod1.jpg"
});

down.addEventListener('click',() => {
    up.style.opacity = 1;
    down.style.opacity = 0.7;
    mainPhoto.src = "photos/tyl1.jpg"
});

if(mainPhoto.src == "photos/przod1.jpg"){
    up.style.opacity = 1;
    down.style.opacity = 0.7;
} else {
    up.style.opacity = 0.7;
    down.style.opacity = 1;
}