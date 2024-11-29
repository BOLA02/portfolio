"use strict"
const form = document.getElementById('contactForm');
  const feedbackMessage = document.getElementById('feedbackMessage');
  const submitForm = document.getElementById('btnSubmit')

  submitForm.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents actual submission
    
    feedbackMessage.textContent = "Thank you for reaching out! Your message has been sent.";
    feedbackMessage.classList.remove('hidden');
    feedbackMessage.classList.add('block');

    form.reset();
    feedbackMessage = '' // Clears the form fields
  });