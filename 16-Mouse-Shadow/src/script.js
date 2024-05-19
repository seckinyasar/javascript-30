const h1Element = document.querySelector('h1')
const containerDiv = document.querySelector('.lol')
const sensivity = 75;





document.addEventListener('mousemove',(e)=>{
    const {offsetWidth: width, offsetHeight: height } = h1Element;
    let   {offsetX: x, offsetY: y } = e;

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xAxios = Math.round((x / width * sensivity) - (sensivity / 2)); 
    const yAxios = Math.round((y / height * sensivity) - (sensivity / 2));
    

    containerDiv.style.textShadow = `
    ${xAxios}px ${yAxios}px 0 rgba(255, 0, 0, 0.7),    
    ${yAxios}px ${xAxios * -1}px 0 rgba(0, 0, 255, 0.7),    
    ${xAxios}px ${yAxios * -1}px 0 rgba(255, 0, 255, 0.7), 
    ${xAxios * -1}px ${yAxios * -1}px 0 rgba(0, 255, 255, 0.7), 
    ${xAxios / 2}px ${yAxios / 2}px 0 rgba(255, 165, 0, 0.7)   
`;}

 
);
