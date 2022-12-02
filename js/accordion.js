document.addEventListener('DOMContentLoaded', function () {
  const featureLinkElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');
  
  featureLinkElems.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (featureLinkElems[i].classList.contains('feature__link_active')) {
        featureSubElems[i].classList.add('hidden');
        featureLinkElems[i].classList.remove('feature__link_active');
      } else {
        featureSubElems.forEach(elem => elem.classList.add('hidden'));
        featureLinkElems.forEach(elem => elem.classList.remove('feature__link_active'));

        featureSubElems[i].classList.remove('hidden');
        btn.classList.add('feature__link_active');
      }
    })
  });
});
