 // Toggle navigation menu for mobile view
 function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}

// Function to open image in fullscreen
function openFullscreen(button) {
  const imgSrc = button.parentElement.querySelector('.item-img-circle').style.backgroundImage;
  
  // Extract URL from the background-image style (format: url("path/to/image"))
  const extractedSrc = imgSrc.slice(5, -2);

  const fullscreen = document.getElementById('fullscreen-view');
  const fullscreenImg = document.getElementById('fullscreen-img');
  
  fullscreenImg.src = extractedSrc;
  fullscreen.style.display = 'flex';
}

// Function to close fullscreen view
function closeFullscreen() {
  const fullscreen = document.getElementById('fullscreen-view');
  fullscreen.style.display = 'none';
}