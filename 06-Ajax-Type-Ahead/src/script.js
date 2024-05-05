
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];

const suggestions = document.querySelector('ul');


const inputElement = document.querySelector('.search')
inputElement.addEventListener('keyup',findMatchingSamples);



export async function fetchData(){
    const response = await fetch(endpoint);
    const datas = await response.json();
    cities.push(...datas);
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}




export function findMatchingSamples(){
  let matchingCities = cities.filter((element) => {return element['city','state'].toLowerCase().includes(this.value)});


  const html = matchingCities.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;





}
