window.glueh.navigation = {
  init: function () {
    var navigation = document.getElementsByClassName('navigation')[0];
    document.getElementsByClassName('mobile-menu')[0].onclick = function () {
      var display = window.getComputedStyle(navigation).display;

      navigation.style.display = 'none' === display ? 'block' : 'none';
    };
  }
};