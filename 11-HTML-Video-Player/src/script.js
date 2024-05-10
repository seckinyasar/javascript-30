const player = document.querySelector('.player');
const video = player.querySelector('.player_video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');








// Functions

function togglePlay(){
    if(video.paused ? video.play() : video.pause());
    console.log("clicked")
}








video.addEventListener('click',togglePlay);

console.log(video)