


let minuteHand ; let hourHand ; let secondHand;


document.addEventListener('DOMContentLoaded',(e)=>{
    secondHand = document.querySelector('.second-hand');
    minuteHand = document.querySelector('.long-hand');
    hourHand = document.querySelector('.hour-hand');

    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(timeZone);
    

    function setTime(){
        let time = new Date();
        let second = time.getSeconds();
        let minute = time.getMinutes();
        let hour   = time.getHours();


        //+90 is added because longHand is horizontal at design time . 
        secondHand.style.transform = 'rotate('+ ((second*6)+90)+'deg)';
        minuteHand.style.transform = 'rotate('+ ((minute*6)+90)+'deg)';
        hourHand.style.transform = 'rotate('+ ((hour*30)+(minute * 0.5)+90)+'deg)';
        
    }
    setInterval(setTime,1000);


})



