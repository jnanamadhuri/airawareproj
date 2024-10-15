document.addEventListener('DOMContentLoaded', () => {
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = document.getElementById(`accordion-${header.getAttribute('data-accordion')}`);
        const isActive = content.classList.contains('active');
        
        document.querySelectorAll('.accordion-content').forEach(item => item.classList.remove('active'));
        if (!isActive) content.classList.add('active');
      });
    });
  
    // Form Validation (basic example)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
      } else {
        alert("Message Sent Successfully!");
        form.reset();
      }
    });
  
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  