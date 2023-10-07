
console.log(Items)

Items.forEach((photo) => {
    photo.addEventListener('mouseover',() => {
        let source = photo.src
        console.log(source)
        photo.src = `photos/tyl${source.charAt(34)}.jpg`
        photo.addEventListener('mouseout',() => {
            photo.src = source
        })
    })
});