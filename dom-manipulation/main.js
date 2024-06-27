'use strict';
let click = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
function clickCountAmount() {
  click++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = `Click Count: ${click}`;
  if (click < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (click < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (click < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (click < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (click < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', clickCountAmount);
