document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.js-menu-toggle');
  var nav = document.querySelector('.p-navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var open = nav.classList.toggle('has-menu-open');
      toggle.setAttribute('aria-expanded', open);
    });
  }
});
