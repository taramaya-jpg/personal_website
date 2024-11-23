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
