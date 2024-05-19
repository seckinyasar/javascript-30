const ulElement = document.querySelector("ul")


const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


const bandsNew = bands.map(bandName => bandName.replace(/^\s*(a |the |an )/gi,'').trim())
bandsNew.sort()



const html = bandsNew.map(element => {
    let bandName=element
    return `
      <li>
        <span>${bandName}</span>
      </li>
    `;
  }).join('');
  ulElement.innerHTML = html;