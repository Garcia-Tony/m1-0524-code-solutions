'use strict';
const $container = document.querySelector('.container');
const $light = document.querySelector('.light');
if (!$container) throw new Error('$light does not exist');
if (!$light) throw new Error('$light does not exist');
$light.addEventListener('click', () => {
  if ($container.className === 'container') {
    $container.className = 'container is-lit';
    $light.className = 'light is-on';
  } else {
    $container.className = 'container';
    $light.className = 'light';
  }
});
