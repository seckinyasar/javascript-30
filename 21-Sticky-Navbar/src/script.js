
// SELECTORS

const stickyElement = document.querySelector('.sticky-element'); 
const navbar = document.querySelector('.navbar'); 
const aElement = document.querySelector(".a-visible-none")
const wikipediaTextDiv = document.querySelector(".texts-wikipedia")


// GETTING THE BOTTOM VALUE OF NAVBAR
const elementOffSet = stickyElement.offsetTop;


function toggleNavbarVisibility() {
    const isScrolled = window.scrollY > elementOffSet;
    aElement.classList.toggle('a-visible-block', isScrolled);
    aElement.classList.toggle('a-visible-none', !isScrolled);

  }
window.addEventListener('scroll',toggleNavbarVisibility)


let apiTextValue;

// FETCHING WIKIPEDIA API
const endpoint = 'https://en.wikipedia.org/w/api.php';
const params = new URLSearchParams({
  origin: '*',
  action: 'parse',
  format: 'json',
  page: 'Industrial Revolution',
  prop: 'text',
  redirects: 1,
  section: 0, // Sadece özet almak için

});




async function wikipediaFetch() {

    fetch(`${endpoint}?${params.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const rawHTML = data.parse.text['*'];

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = rawHTML;


      const content = tempDiv.querySelectorAll('p,h1,h2,h3,h4,h5,h6');
      let filteredContent = '';
      for (let i = 0; i < content.length; i++) {
        filteredContent += content[i].outerHTML;
      }

      // Real div
      wikipediaTextDiv.innerHTML = filteredContent;

    })
  .catch(error => { 
    console.error('Error:', error); 
  });

}


wikipediaFetch();



































// WE LEARNED THAT SCROLL IS NOT WORKING WITH ANYTHING THAT INTERFERES WITH SCREEN SIZE . like , h-screen , overflow-x-auto etc. 

//OFFSET IS USED BECAUSE .top is dynamic .