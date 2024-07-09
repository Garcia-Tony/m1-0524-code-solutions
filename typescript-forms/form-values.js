'use strict';
const contact = document.querySelector('#contact-form');
if (!contact) throw new Error('contact does not exist');
contact.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = contact.elements;
  const values = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('messageData:', values);
  contact.reset();
});
