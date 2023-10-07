const Items = document.querySelectorAll("a img:not(#illegalNight)")
const p = document.querySelector(".buttons p")

p.append(`${Items.length}`)