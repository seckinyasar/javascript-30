


const checkboxElement = document.querySelectorAll("input[type='checkbox']");
const checkboxArray = Array.from(checkboxElement);




let lastChecked=0;
function handleCheckEvent(e){
    if (e.shiftKey && this.checked) {
        const firstCheckedIndex = checkboxArray.indexOf(lastChecked);
        const currentIndex = checkboxArray.indexOf(this);
    
        
            if(firstCheckedIndex <= 0){
                checkboxArray.slice(0,currentIndex).forEach(element =>{
                    element.checked =true;
                })
            }

            else if( firstCheckedIndex > 0 && firstCheckedIndex < currentIndex){
                checkboxArray.slice(firstCheckedIndex,currentIndex).forEach(element => {
                    element.checked=true;
                })
            }

            else {
                checkboxArray.slice(currentIndex,firstCheckedIndex).forEach(element => {
                    element.checked=true;
                })
            }
}
    lastChecked = this;
}







checkboxArray.forEach(element => element.addEventListener('click', handleCheckEvent));
