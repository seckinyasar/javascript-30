const keyName ={
    A : ("./assets/clap.wav"), 
    S : ("../assets/sounds/hihat.wav"),
    D : ("../assets/sounds/kick.wav"),
    F : ("../assets/sounds/openhat.wav"),
    G : ("../assets/sounds/boom.wav"),
    H : ("../assets/sounds/ride.wav"),
    J : ("../assets/sounds/snare.wav"),
    K : ("../assets/sounds/tom.wav"),
    L : ("../assets/sounds/tink.wav"),
}


let letters ; 

// selectors should be used after contents loaded , otherwise it returns undefined . 
window.addEventListener('DOMContentLoaded',() =>{
    letters = document.querySelectorAll('[data-letter]');
})


document.addEventListener('keydown',(e)=>{
    let audio = new Audio(keyName[e.key.toUpperCase()])  
    audio.play();



    letters.forEach(element => {
        if(element.dataset.letter == e.key.toUpperCase())
            element.classList.toggle("playingDiv")

        
    });

})


//remove playingDiv class when transitionend event happens
document.addEventListener('transitionend',(e) =>{
    e.target.classList.remove('playingDiv')
})

