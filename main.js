
//Animate the logo
function animateLogo() {
    const logo = document.querySelector('.logo')
    logo.classList.add('logo-top')
}

/*
*@params { String }
*  SlideIn the lines
*/
function slideInLine(selector) {
    const lines = Array.from(selector.children)
    lines.forEach( line => {
            line.classList.add('line-item')
    })
}

/*
*@params { String }
*  Fade in animation
*/
function fadeInLine(selector) {
    const lines = Array.from(selector.children)
    lines.forEach( line => {
            line.classList.add('fade-in-line')
    })
}

// FadeIn the text
function showMiniText() {
    const miniText = document.querySelector('.mini-text')
    miniText.classList.remove('hide-mini-text')
    miniText.classList.add('show-mini-text')
}

//Show the map
function showMap(){
    const map = document.querySelector('.map')
    map.classList.add('show-map')
}

//Manage the slider
function startSlider() {
    //get all slide
    const slider = document.querySelectorAll('.slide')
    for(let i=0; i < slider.length; i++){
        //timer
        setTimeout(() => {
        //toggle class and animate the logo
            if(i===0) animateLogo()
            if(i == 1)showMiniText()
            slider[i].classList.remove('hidden')
            slider[i].classList.add('visible')
        //different animation on the last slide
            if(i === 3){
                 fadeInLine(slider[i])
                showMap()
            } else
                slideInLine(slider[i])
            if( i > 0 ){
                slider[i-1].classList.add('hidden')
                slider[i-1].classList.remove('visible')
            }
        }, 2000*i)
    }
}

//Start all animation
startSlider()

