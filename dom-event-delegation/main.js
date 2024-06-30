'use strict';
const $click = document.querySelector('.task-list');
if (!$click) throw new Error('$click does not exist');
$click.addEventListener('click', (event) => {
  const target = event.target;
  console.log('event.target:', target);
  console.log('event.target.tagName:', target.tagName);
  if (target.tagName === 'BUTTON') {
    const close = target.closest('.task-list-item');
    console.log('Closest .task-list-item:', close);
    close.remove();
  }
});
