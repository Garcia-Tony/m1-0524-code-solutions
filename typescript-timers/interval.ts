const heading = document.querySelector('.countdown-display');

if (heading) {
  let count = 4;

  function countdown(): void {
    if (count > 0) {
    (heading as HTMLElement).textContent = count.toString();
    count--;
    } else {
    (heading as HTMLElement).textContent = '~Earth Beeelooowww Us~';
    clearInterval(intervalId);
    }
  }
const intervalId = setInterval(countdown, 1000);

}
