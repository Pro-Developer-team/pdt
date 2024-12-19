// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded and ready!');

    // Example: Add a click event to all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`Navigating to ${this.textContent}`);
        });
    });

    // Additional JavaScript functionality can be added here
});
