

let spacing; let blur; let baseColor;

    spacing=  document.getElementById('spacing')
    blur =  document.getElementById('blur')
    baseColor = document.getElementById("baseColor");
    
    console.log(spacing);
    console.log(blur);






spacing.addEventListener("input",(e)=>{
    console.log(e)
    spacing.style.setProperty(".control",e.target.value);
})
