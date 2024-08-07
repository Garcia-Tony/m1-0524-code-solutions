const $heading = document.querySelector('.message');

function helloThere(): void {
  if ($heading) {
$heading.textContent = 'Hello There!';
}
}

setTimeout(helloThere, 2000);
