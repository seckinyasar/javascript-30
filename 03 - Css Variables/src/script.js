




const root = document.documentElement;


 function valueChanged(id,newValue){
    let suffix = (id != 'baseColor' ? 'px' : '');
    root.style.setProperty('--' + id , newValue + suffix),
    console.log(newValue + suffix);



}


