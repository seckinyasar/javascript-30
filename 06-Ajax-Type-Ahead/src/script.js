
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];

const inputElement = document.querySelector('.search')
inputElement.addEventListener('keyup',suggest);



export async function fetchData(){
    const response = await fetch(endpoint);
    console.log(response);

    const datas = await response.json();

    cities.push(...datas);
    console.log(cities)
}


export function addLiElement(){
    let ulElement  = document.getElementById('ul')
    
    for(let i = 0 ; i<=10 ;i++){
        let li = document.createElement('li');
        li.innerHTML='Hello';
        li.classList.add('li')
        ulElement.append(li);
    }



}   



export function suggest(text){
    console.log(cities.filter((element) => {return element['city','state'].toLowerCase().includes(this.value)  }));

}