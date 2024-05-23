
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



function wikipediaFetch(){
    fetch('https://tr.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=Türkiye')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Hata:', error);
    });

}
wikipediaFetch();


































// WE LEARNED THAT SCROLL IS NOT WORKING WITH ANYTHING THAT INTERFERES WITH SCREEN SIZE . like , h-screen , overflow-x-auto etc. 

//OFFSET IS USED BECAUSE .top is dynamic .