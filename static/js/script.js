// Add smooth scrolling to all links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      // Make sure the clicked link has a hash value
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();
        
        // Get the target element based on the hash value
        const target = document.querySelector(this.hash);
        
        // Scroll smoothly to the target element
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  