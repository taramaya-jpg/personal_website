$(document).ready(function() {
    // Smooth scrolling for internal links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Alert on button click
    $('.btn-primary').on('click', function() {
        alert('More information about this family member is now available!');
    });
});

// Updated video clues array with embed URLs
const videoClues = [
    { 
        video: 'https://www.youtube.com/embed/uRKeeelqWxw', // Albert Einstein
        description: 'This video discusses how persistence and imagination can help overcome challenges. Who said, "Imagination is more important than knowledge"?',
        inspiration: 'Albert Einstein' 
    },
    { 
        video: 'https://www.youtube.com/embed/IsQ_8tWKtYM', // His Majesty King Khesar Namgyel Wangchuck
        description: 'A motivational speech by His Majesty King Khesar Namgyel Wangchuck. Can you guess who this inspiring leader is?',
        inspiration: 'His Majesty King Khesar Namgyel Wangchuck' 
    },
    { 
        video: 'https://www.youtube.com/shorts/mFBiLx-LlDE', // Marie Curie
        description: 'Learn about a physicist who won two Nobel Prizes for her groundbreaking research in science.',
        inspiration: 'Muniba Mazari' 
    },
    { 
        video: 'https://www.youtube.com/embed/9cY8euFfF8E', // Mahatma Gandhi
        description: 'This inspiring message emphasizes being the change you want to see in the world.',
        inspiration: 'Mahatma Gandhi' 
    },

];

// Dynamically load the video
function checkVideoGuess() {
    const guess = document.getElementById('guessInput').value.trim();
    const messageElement = document.getElementById('game-message');

    if (guess.toLowerCase() === currentClue.inspiration.toLowerCase()) {
        messageElement.textContent = 'Correct! You guessed the inspiration!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Oops! That is incorrect. Try again!';
        messageElement.style.color = 'red';
    }

    // Load a new random video clue
    currentClue = videoClues[Math.floor(Math.random() * videoClues.length)];
    document.getElementById('video-description').textContent = currentClue.description;

    // Update the video player with the new video's URL
    document.getElementById('video-player').src = currentClue.video;
}

// Load the first video when the page loads
document.getElementById('video-player').src = videoClues[0].video;

function showVideo(name, videoUrl, description) {
    // Change the iframe's source to the new video URL
    document.getElementById('video-player').src = videoUrl;

    // Update the description text below the video
    document.getElementById('video-description').textContent = description;

    // Optional: Highlight the active card by adding/removing 'active' class
    const allCards = document.querySelectorAll('.inspiration-card');
    allCards.forEach(card => card.classList.remove('active'));
    
    // Add 'active' class to the clicked card
    event.currentTarget.classList.add('active');
}// Initialize the current clue
let currentClue = videoClues[0]; // Set the first clue as the initial one

$(document).ready(function() {
    // Smooth scrolling for internal links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Load the first clue's description
    document.getElementById('video-description').textContent = currentClue.description;

    // Set the video player's source to the first video's URL
    document.getElementById('video-player').src = currentClue.video;
});

// Function to check the user's guess
function checkVideoGuess() {
    const guess = document.getElementById('guessInput').value.trim();
    const messageElement = document.getElementById('game-message');

    if (guess.toLowerCase() === currentClue.inspiration.toLowerCase()) {
        messageElement.textContent = 'Correct! You guessed the inspiration!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Oops! That is incorrect. Try again!';
        messageElement.style.color = 'red';
    }

    // Load a new random video clue
    currentClue = videoClues[Math.floor(Math.random() * videoClues.length)];
    document.getElementById('video-description').textContent = currentClue.description;

    // Update the video player with the new video's URL
    document.getElementById('video-player').src = currentClue.video;
}

// Function to load a video and update the description dynamically
function showVideo(name, videoUrl, description) {
    // Change the iframe's source to the new video URL
    document.getElementById('video-player').src = videoUrl;

    // Update the description text below the video
    document.getElementById('video-description').textContent = description;

    // Optional: Highlight the active card by adding/removing 'active' class
    const allCards = document.querySelectorAll('.inspiration-card');
    allCards.forEach(card => card.classList.remove('active'));

    // Add 'active' class to the clicked card
    event.currentTarget.classList.add('active');
}

