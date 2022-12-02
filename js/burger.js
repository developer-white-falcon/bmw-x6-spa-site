const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');
const menuListElem = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  humburgerElem.classList.toggle('humburger-menu-active');
};
const closeMenu = () => {
  menuElem.classList.remove('menu-active');
  humburgerElem.classList.remove('humburger-menu-active');
};

humburgerElem.addEventListener('click', toggleMenu);

menuListElem.forEach(elem => {
  elem.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('menu-list__link')) {
      closeMenu();
    }
  });
});