'use strict';
const $open = document.querySelector('.open-modal');
if (!$open) throw new Error('$click does not exist');
function handleOpen() {
  $dialog?.showModal();
}
$open.addEventListener('click', handleOpen);
const $dismiss = document.querySelector('.dismiss-modal');
if (!$dismiss) throw new Error('$click does not exist');
function handleDismiss() {
  $dialog?.close();
}
$dismiss.addEventListener('click', handleDismiss);
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('$click does not exist');
addEventListener('click', (event) => {
  const target = event.target;
  console.log('event.target:', target);
  console.log('event.target.tagName:', target.tagName);
  if (target.tagName === 'BUTTON') {
    const close = target.closest('.task-list-item');
    console.log('Closest .task-list-item:', close);
    close.remove();
  }
});
