/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function creatListItem() {
  // loop over sections
  for (section of sections) {
    listItem = document.createElement('li');
    listItem.innerHTML = `<li><a herf='#${section.id}' data-nav='${section.id}' class='menu__link'>${section.dataset.nav}</a></li>`;
    navList.appendChild(listItem);
  }
}
creatListItem()

// Set sections as active
// Styling for the active states with getBoundingClientRact
function sectionInViewPort (elem) {
  let sectionPos = elem.getBoundingClientRect();
  return (sectionPos.top >= 0);
}


// Add class 'active' to the section when near top of view
document.addEventListener('scroll', toggleActiveClass);

// Gives the section being viewed a different appearance
function toggleActiveClass() {
  for (section of sections) {
    // If the section is in the viewport
    if (sectionInViewPort(section)) {
      // Check if it dosn't already contain 'your-active-class'
      if (!section.classList.contains('your-active-class')) {
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    }
  }
}

// Scroll to section on link click
navList.addEventListener('click', (toSection) => {
    toSection.preventDefault();
    if (toSection.target.dataset.nav) {
        document.getElementById(`${toSection.target.dataset.nav}`)
        .scrollIntoView({behavior: 'smooth'});
       
    }
});



