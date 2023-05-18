document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#panel li button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.getAttribute('data-value');
      window.location.href = page;
    });
  });
});
