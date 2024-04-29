const keyName ={
    A : ("clap.mp3"), 
    S : ("public/hihat.mp3"), 
    D : ("kick.mp3"), 
    F : ("openhat.mp3"), 
    G : ("boom.mp3"), 
    H : ("ride.mp3"), 
    J : ("snare.mp3"), 
    K : ("tom.mp3"),   
    L : ("tink.mp3"), 



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

