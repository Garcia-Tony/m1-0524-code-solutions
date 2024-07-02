const $open = document.querySelector('.open-modal');
if (!$open) throw new Error('$click does not exist');

function handleOpen(): void {
  $dialog?.showModal();
}

$open.addEventListener('click', handleOpen);

const $dismiss = document.querySelector('.dismiss-modal');
if (!$dismiss) throw new Error('$click does not exist');

function handleDismiss(): void {
  $dialog?.close();
}

$dismiss.addEventListener('click', handleDismiss);

const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('$click does not exist');

addEventListener('click', (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('event.target:', target);
  console.log('event.target.tagName:', target.tagName);

  if (target.tagName === 'BUTTON') {
    const close: any = target.closest('.task-list-item');
    console.log('Closest .task-list-item:', close);
    close.remove();
  }
});
