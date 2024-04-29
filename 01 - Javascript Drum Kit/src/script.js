const keyName ={
    A : ("public/clap.wav"), 
    S : ("public/hihat.wav"), 
    D : ("public/kick.wav"), 
    F : ("public/openhat.wav"), 
    G : ("public/boom.wav"), 
    H : ("public/ride.wav"), 
    J : ("public/snare.wav"), 
    K : ("public/tom.wav"),   
    L : ("public/tink.wav"), 



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

