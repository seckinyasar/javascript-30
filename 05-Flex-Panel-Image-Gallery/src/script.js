



export function logPanels(){
    let panels = document.querySelectorAll(".panel");

    console.log(panels)


    panels.forEach(panel => panel.addEventListener('click',toggleClicked));



    function toggleClicked(e){
        this.classList.toggle('panel-clicked')
        this.classList.toggle('panel-open')
    }

    
}

