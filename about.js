// Toggle navigation menu for mobile view
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}

$(document).ready(function() {
    // jQuery hover effect for each hobby card description
    $('.hobby-card').hover(function() {
      $(this).find('.hobby-description').slideToggle(200);
    });
  });
  
  // Mobile Navigation Toggle
  function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
  }
  // Get the dropdown button and menu
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle dropdown visibility on click
dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent click event from propagating to parent elements
    dropdownMenu.classList.toggle('show');
});

// Close the dropdown if the user clicks anywhere outside
window.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});
