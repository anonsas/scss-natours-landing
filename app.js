// Remove 'checkbox hack' :checked property, on menu item click.
let navItems = document.querySelectorAll('.navigation__link');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.navigation__checkbox').click();
  });
});

// Close popup, by clicking outside of the popup.
const popup = document.querySelector('#popup');
popup.addEventListener('click', (e) => {
  if (e.target.id === 'popup') {
    document.querySelector('.popup__close').click();
  }
});
