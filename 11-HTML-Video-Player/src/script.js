
const player = document.querySelector('.player');
const video = player.querySelector('.player_video');

const progressBar = player.querySelector('.progress__filled');
const progressDiv = player.querySelector('.progress');

const togglePlayPause = player.querySelector('.togglePlayPause');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');
const fullScreenButton = player.querySelector('.fullScreen_button');











// Functions

function togglePlayByVideo(){
    if(video.paused){
        video.play();
        togglePlayPause.innerHTML="⏹️"
    }
    else{
        video.pause();
        togglePlayPause.innerHTML="▶"
        
    }
}

function togglePlayByButtons(){
    if(video.paused){
        this.innerHTML = "⏹️"
        video.play();
    }
    else{
        this.innerHTML ="▶"
        video.pause();
    }
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function skipByClicking(e){
    const skipTime = (e.offsetX / progressDiv.offsetWidth) * video.duration;
    video.currentTime = skipTime;
}

function sliderEvent(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis=`${percent}%`;
}




function toggleFullScreen() {
    if (!document.fullscreenElement) {
      player.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }


function disableHover() {
    player.style.pointerEvents = 'none';
}


function enableHover() {
    player.style.pointerEvents = 'auto';
    
}






//Event Handlers

video.addEventListener('click',togglePlayByVideo);

togglePlayPause.addEventListener('click',togglePlayByButtons);

skipButtons.forEach(x => x.addEventListener('click',skip))

ranges.forEach(x => x.addEventListener('input',sliderEvent))

video.addEventListener('timeupdate',handleProgress);



let mousedown = false;
progressDiv.addEventListener('click',(e)=>{
    if(e.target.classList.contains('progress_bar_container') || (e.target.classList.contains('progress__filled')))
    {
        skipByClicking(e);
    }}
)

progressDiv.addEventListener("mousedown", (e) =>
    {
        if(e.target.classList.contains('progress_bar_container') || (e.target.classList.contains('progress__filled')))
            {
                mousedown = true;
            }
    }
)    


progressDiv.addEventListener("mousemove", (e) =>{
    if(e.target.classList.contains('progress_bar_container') || (e.target.classList.contains('progress__filled'))){
        mousedown && skipByClicking(e);
    }} 
)


document.addEventListener("mouseup", () => {
        mousedown = false;
})




fullScreenButton.addEventListener('click',toggleFullScreen);




//After Full Screen 

let timer = 0;
document.addEventListener('mousemove', () => {
    enableHover();
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(disableHover, 2000); // 2 saniye sonra iptal et
});
  




// SWITCH CASE FOR KEY BINDINGS

document.addEventListener('keydown',(event)=>{
    console.log(event.code)
        switch (event.code){
            case 'Space' : // SPACE
                togglePlayByVideo();
                break;
            case 'ArrowRight': // Right Arrow
                video.currentTime += parseFloat(2.5)
                break;
            case 'ArrowLeft':
                video.currentTime -= parseFloat(2.5)
                break;
            case 'KeyF':
                toggleFullScreen();
                break;

        }


})




//KEY BINDINGS FOR SKIPPING WITH NUMPADS AND DIGITS

document.addEventListener('keydown',(event)=>{
    if (event.key >= '0' && event.key <='9' ){
        let targetPartition = (event.key*0.1)
        video.currentTime = parseFloat(video.duration*targetPartition)
    }
})

    



video.addEventListener('dblclick',(e) =>{
    toggleFullScreen();
})