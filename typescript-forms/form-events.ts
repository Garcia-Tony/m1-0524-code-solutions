function handleFocus(event: Event): void {
  console.log('focus event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('value of name:', eventTarget.value);
}

const nameInfo = document.querySelector('#user-name');
const email = document.querySelector('#user-email');
const message = document.querySelector('#user-message');

if (!nameInfo) throw new Error('name does not exist');
if (!email) throw new Error('email does not exist');
if (!message) throw new Error('message does not exist');

nameInfo.addEventListener('focus', handleFocus);
nameInfo.addEventListener('blur', handleBlur);
nameInfo.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);

message.addEventListener('focus', handleFocus);
message.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
