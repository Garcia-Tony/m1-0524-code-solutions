"use strict";
const heading = document.querySelector('.countdown-display');
if (heading) {
    let count = 4;
    function countdown() {
        if (count > 0) {
            heading.textContent = count.toString();
            count--;
        }
        else {
            heading.textContent = '~Earth Beeelooowww Us~';
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(countdown, 1000);
}
