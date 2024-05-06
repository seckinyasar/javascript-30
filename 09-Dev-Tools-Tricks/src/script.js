
//Interpolated
console.log('hello i am a %s string!','1337');


//styled
console.log("%c I'll be watching you ",'font-size:110px; background-color:purple; text-shadow:2px 2px  ')    

//warn
console.warn("Suspicious users may steal your data !")

//error
console.error("Your location revealed !")

//info
console.log(":)")

//Testing 
const divElement = document.querySelector('div');
console.assert(divElement.classList.contains("anything"),"Error Code : 1337");


//console.clear();   // dir gives all properties etc .
console.log(divElement);
console.dir(divElement);



const cars = [
    {name:"Mitsubishi Eclipse 1995",age:29},
    {name:"Mitsubishi Lancer Evolution",age:8},
    {name:"Honda NSX",age:1},
]
cars.forEach(car => {
    console.groupCollapsed(car.name,car.age);
    console.groupEnd(car.name,car.age);
    //whatever we put here will be shown within the group , thats the point
});




// Count  => shows how many times we used the string  gives as parameter .

console.count("check")


//Timing 

console.time("fetching data")  //time starts

fetch('https://api.github.com/users/wesbos').then(data => data.json()).then(data => {
    console.timeEnd("fetching data")   // same string required with time function . 
    console.log(data)
})





//Table

console.table(cars);