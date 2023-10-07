const ProfileButton = document.querySelector("#profileButton")
const ProfileView = document.querySelector(".profile")


ProfileButton.addEventListener('mouseover',() => {
    ProfileView.style.display = "flex"
    ProfileView.addEventListener('mouseover',() => {
        ProfileView.style.display = "flex"
    });
});

ProfileButton.addEventListener('mouseout',() => {
    ProfileView.style.display = "none"
    ProfileView.addEventListener('mouseout',() => {
        ProfileView.style.display = "none"
    });
});





