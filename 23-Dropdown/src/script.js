


// DROPDOWN FUNCTIONALITY
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




// Toggle Day and Night Mode

document.addEventListener("DOMContentLoaded", function() {
    const toggleDayNight = document.querySelector('.header-right-day-night-toggle-button')
    const nightIcon = document.querySelector('.night-icon')
    const dayIcon = document.querySelector('.day-icon')
    const body = document.body;
    

    // Check for saved user preference, if any, on load of the website
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.remove('light-mode');
        nightIcon.classList.add('night-icon-toggle');
    } else {
        body.classList.add('light-mode');
        dayIcon.classList.add('day-icon-toggle');
    }

    toggleDayNight.addEventListener('click', function() {
        if (!body.classList.contains('light-mode')) {
            body.classList.toggle('light-mode');
            nightIcon.classList.remove('night-icon-toggle');
            dayIcon.classList.add('day-icon-toggle');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.toggle('light-mode');
            dayIcon.classList.remove('day-icon-toggle');
            nightIcon.classList.add('night-icon-toggle');
            localStorage.setItem('theme', 'dark');
        }
    });
});