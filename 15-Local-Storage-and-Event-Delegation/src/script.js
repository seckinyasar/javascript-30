const inputItem = document.querySelector(".custom-input-border")
const submit = document.querySelector(".custom-submit-border")
const form = document.querySelector(".custom-form")
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const clearButton = document.querySelector(".custom-clear")






// THE FIRST THREE
let retrievedInitialItems;
if(localStorage.getItem('initialItems') == null ){
    let initialItems = [{text:"Your eyes",done:true},{text:"Your smile",done:true},{text:"Your lips",done:true}]
    retrievedInitialItems = initialItems;
    localStorage.setItem('initialItems',JSON.stringify(retrievedInitialItems))
}
else{
    retrievedInitialItems = JSON.parse(localStorage.getItem('initialItems'));
}




const showInitialItems = localStorage.getItem('initialItems')
if(showInitialItems && showInitialItems.length >0){
    createElements(retrievedInitialItems);
}

  


let text = inputItem.value.trim;
let items = []




// GET THE DATAS FIRST
const storedItems = JSON.parse(localStorage.getItem('items'));
if (storedItems && storedItems.length > 0) { 
    items = storedItems;
    createElements(items)
}



//CLEAR EVENT
clearButton.addEventListener('click',(e)=>{
    items = []
    localStorage.setItem('items',JSON.stringify(items))
    retrievedInitialItems = []
    localStorage.setItem('initialItems',JSON.stringify(retrievedInitialItems))

    form.innerHTML="";
})



// SUBMIT EVENT
document.addEventListener('submit',(e)=>{
    e.preventDefault();

        items.push({text:inputItem.value,done:false});
        inputItem.value = "";

        populateStorage();
        createElements(items)
})




// ADD ITEMS TO LOCALSTORAGE
function populateStorage(){
    localStorage.setItem('items',JSON.stringify(items))
    localStorage.setItem('initialItems',JSON.stringify(retrievedInitialItems))
}








// CREATE ELEMENTS WITH GIVEN PARAMETER
function createElements(itemsToBeCreated){
    const existingItems = Array.from(form.querySelectorAll('li')).map(li => li.textContent.trim());

    // CUSTOM INDEX IS USED TO HANDLE TWO DIFFERENT PARAMETER , OTHERWISE IT STARTS WITH INDEX 0 AGAIN . 
    let nextIndex = document.querySelectorAll('input[type="checkbox"]').length  

    itemsToBeCreated.forEach((element) => {
        if (!existingItems.includes(element.text)){

            let liElement = document.createElement('li');
            let checkbox = document.createElement('input')
            checkbox.type='checkbox';
            checkbox.checked=element.done;


            checkbox.dataset.index = nextIndex; 
            checkbox.id = `item${nextIndex}`; 


            //DEBUG
            // console.log(checkbox.dataset.index)
            // console.log(checkbox.id)
     
            let label  = document.createElement('label')
            label.setAttribute('for' ,`item${nextIndex}`)
            label.textContent = element.text;



            checkbox.addEventListener('change', function() {
                element.done = this.checked; 
                console.log(element)
                populateStorage();
              });
        

            liElement.appendChild(checkbox)
            liElement.appendChild(label)
            form.appendChild(liElement);

            nextIndex++;
    }
    });
}






