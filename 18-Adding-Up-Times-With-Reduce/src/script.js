const sections = document.querySelectorAll('[data-time]')




const sectionsArray = Array.from(sections);


let totalSeconds =0;
sectionsArray.forEach(item =>{
    const timeString = item.dataset.time;
    const [minutes,seconds] = timeString.split(":").map(Number);
    totalSeconds += (minutes*60) + seconds;
})


function secondsToTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);        
    const minutes = Math.floor((totalSeconds % 3600) / 60); 
    const seconds = totalSeconds % 60;                     

    return { hours, minutes, seconds };
}
  

const time = secondsToTime(totalSeconds);
console.log(`${time.hours} Saat, ${time.minutes} Dakika, ${time.seconds} Saniye`);
  

