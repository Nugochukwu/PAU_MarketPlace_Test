// include.js
async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    for (let element of elements) {
      const file = element.getAttribute('data-include');
      const resp = await fetch(file);
      if (resp.ok) {
        element.innerHTML = await resp.text();
      } else {
        element.innerHTML = 'Page not found.';
      }
    }
  }
  includeHTML();
 