window.glueh.ga = {
  cookieString: 'ga-disable-{{ site.ga }}',
  id: '{{ site.ga }}',
  init: function () {
    return window.glueh.cookie.check(this.cookieString);
  },
  activate: function () {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };

    if ('localhost' !== window.location.hostname) {
      window.gtag('js', new Date());
      window.gtag('config', this.id, { 'anonymize_ip': true });
    }
  },
  optOut: function () {
    document.cookie = this.cookieString + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[this.cookieString] = true;
  }
};

window.glueh.ga.optOut = window.glueh.ga.optOut.bind(window.glueh.ga);
