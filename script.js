document.addEventListener('DOMContentLoaded', function () {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
  
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Get the target section ID from the link's href
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Scroll smoothly to the target section
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjusted offset to consider the fixed navbar
            behavior: 'smooth'
          });
        }
      });
    });
  });
  