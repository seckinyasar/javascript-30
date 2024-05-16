const inputItem = document.querySelector(".custom-input-border")
const submit = document.querySelector(".custom-submit-border")
const form = document.querySelector(".custom-form")
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const clearButton = document.querySelector(".custom-clear")





let text = inputItem.value.trim;
let items = []

    // { text:"Sütlü Simit", done:false,}]


// GET THE DATAS FIRST
const storedItems = JSON.parse(localStorage.getItem('items'));
if (storedItems && storedItems.length > 0) { 
    items = storedItems;
    showItems();
}



//CLEAR EVENT
clearButton.addEventListener('click',(e)=>{
    localStorage.clear();
    items = [];
    form.innerHTML="";
})

// SUBMIT EVENT

document.addEventListener('submit',(e)=>{
    e.preventDefault();

        items.push({text:inputItem.value,done:false});
        inputItem.value = "";

        populateStorage();
        showItems();
})





// ADD ITEMS TO LOCALSTORAGE
function populateStorage(){
    localStorage.setItem('items',JSON.stringify(items))
}







// TO SHOW ITEMS FROM LOCALSTORAGE
function showItems(){
    createElements(items);
}








// CREATE ELEMENTS WITH GIVEN PARAMETER
function createElements(itemsToBeCreated){
    const existingItems = Array.from(form.querySelectorAll('li')).map(li => li.textContent.trim());
    itemsToBeCreated.forEach((element,index) => {

        if (!existingItems.includes(element.text)){

            let liElement = document.createElement('li');
            let checkbox = document.createElement('input')
            checkbox.type='checkbox';
            checkbox.checked=element.done;
            checkbox.classList.add(".plates")

            checkbox.addEventListener('change', function() {
                items[index].done = this.checked; 
                console.log(index)

                populateStorage();
              });
        
            const textNode = document.createTextNode(element.text);
            liElement.appendChild(checkbox)
            liElement.appendChild(textNode)
            form.appendChild(liElement);
    }
    });
}