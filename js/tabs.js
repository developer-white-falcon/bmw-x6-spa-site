const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const designTitles = document.querySelectorAll('.design__title');

for (const tab of tabsHandlerElems) {
  tab.addEventListener('click', () => {
    tabsHandlerElems.forEach(elem => {
      if (tab === elem) {
        elem.classList.add('design-list__item_active');
      } else {
        elem.classList.remove('design-list__item_active');
      }
    });
    tabsFieldElems.forEach(elem => {
      if (elem.dataset.tabsField === tab.dataset.tabsHandler) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    });
    designTitles.forEach(elem => {
      if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    });
  });
}