const root = document.documentElement;

let spacing = document.getElementById('spacing');
let blur = document.getElementById('blur');
let baseColor = document.getElementById('baseColor');


function valueChanged(id,newValue){
    let suffix = (id != 'baseColor' ? 'px' : '');
    root.style.setProperty('--' + id , newValue + suffix);
}


[spacing, blur, baseColor].forEach(element => {
    element.addEventListener('input', (event) => {
      valueChanged(event.target.id, event.target.value);
    });
  });




export {valueChanged}