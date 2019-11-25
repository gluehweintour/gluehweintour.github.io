window.glueh.data = {
  setYear: function () {
    document.getElementsByClassName('copyright-year')[0].innerHTML = new Date().getFullYear();
  },
  calcDays: function () {
    var date = new Date();
    var first = new Date(date.getFullYear(), 0, 0);
    var diff = date - first;

    return Math.floor(diff / 86400000);
  }
};

