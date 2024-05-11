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
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function sliderEvent(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis=`${percent}%`;
}

function skipByClicking(e){
    const time = (e.offsetX / progressDiv.offsetWidth) * video.duration;
    video.currentTime = time;
    console.log(progressDiv.offsetWidth)
    console.log(e.offsetX)

}


function toggleFullScreen(){
        player.requestFullscreen();

}



//Event Handlers

video.addEventListener('click',togglePlayByVideo);

togglePlayPause.addEventListener('click',togglePlayByButtons);

skipButtons.forEach(x => x.addEventListener('click',skip))

ranges.forEach(x => x.addEventListener('input',sliderEvent))

video.addEventListener('timeupdate',handleProgress);

    
progressDiv.addEventListener('click',(e)=>{
    if(e.target.classList.contains('progress_bar_container') || (e.target.classList.contains('progress__filled')))
    {
        skipByClicking(e);
    }
})

fullScreenButton.addEventListener('click',toggleFullScreen);





