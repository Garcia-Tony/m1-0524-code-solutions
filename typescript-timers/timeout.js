"use strict";
const $heading = document.querySelector('.message');
function helloThere() {
    if ($heading) {
        $heading.textContent = 'Hello There!';
    }
}
setTimeout(helloThere, 2000);
