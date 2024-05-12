//Selectors
const playerParentDiv = document.querySelector(".visibility-for-player")
const textDiv = document.querySelector(".text-div")
const audioDiv = document.querySelector(".audio")

console.log(playerParentDiv)




// Sequntial Keys 

let playWord = ['p','l','a','y']
let i = 0;
document.addEventListener('keydown',(e) =>{

    for(i;i<playWord.length;){
        if(playWord[i] == e.key){
            i++;
            console.log(i);
            if (i==4){
                console.log("Congratulations , you deserved that masterpiece")
                playerParentDiv.classList.remove("visibility-for-player");
                textDiv.classList.add("visibility-for-player")
                audioDiv.play();
                audioDiv.value=0.05;

            }
            break;
        }
        else{
            i = 0;
            console.log("i is set to 0 ")
            break;
        }
    }
})



