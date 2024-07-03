interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const contact = document.querySelector('#contact-form') as HTMLFormElement;

if (!contact) throw new Error('contact does not exist');

contact.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = contact.elements as FormElements;

  const values = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('messageData:', values);

  contact.reset();
});
