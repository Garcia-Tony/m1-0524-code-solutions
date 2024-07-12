const container = document.querySelector('.tab-container');
const tab = document.querySelectorAll('.tab');
const view = document.querySelectorAll('.view');

container?.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < tab.length; i++) {
      const tabs = tab[i];
      if (tabs === $eventTarget) {
        tabs.className = 'tab active';
      } else {
        tabs.className = 'tab';
      }

      const dataView = $eventTarget.getAttribute('data-view');

      for (let i = 0; i < view.length; i++) {
        const views = view[i];
        if (views.getAttribute('data-view') === dataView) {
          views.className = 'view';
        } else {
          views.className = 'hidden';
        }
      }
    }
  }
});
