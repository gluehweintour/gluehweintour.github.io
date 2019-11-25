window.glueh = {};

{% include js/consent.js %}
{% include js/checklinks.js %}
{% include js/sendmail.js %}
{% include js/cookie.js %}
{% include js/ga.js %}
{% include js/data.js %}

window.glueh.init = function () {
  this.checkLinks();
  this.consent.check();
  this.ga.init();
  this.ga.activate();
  this.data.setYear();
};

window.glueh.init = window.glueh.init.bind(window.glueh);

window.sendmail = window.glueh.sendmail;
window.onload = window.glueh.init;
