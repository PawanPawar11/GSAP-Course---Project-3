function breakText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")

    var clutter = ""

    splittedText.forEach(function(elem){
        clutter += `<span>${elem}</span>`
    })

    h1.innerHTML = clutter
}

breakText()

gsap.from("h1 span", {
    y:50,
    opacity: 0,
    duration:0.8,
    delay:0.5,
    stagger: 0.2
})