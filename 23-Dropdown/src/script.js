
// SELECTORS



const dropdowns = Array.from(document.querySelectorAll('.header-dropdown-toggle'))

dropdowns.forEach(element => {
    const docsDropdown = element.querySelector('.header-dropdown')
    element.addEventListener('mouseover', () => {
        docsDropdown.style.display = 'block'
    })
    element.addEventListener('mouseout', () => {
        docsDropdown.style.display = 'none'
    })
});

// DEBOUNCE IS NEEDED FOR FURTHER USE OF THIS FUNCTION

