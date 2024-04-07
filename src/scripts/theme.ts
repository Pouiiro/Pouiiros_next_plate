export const themeSetter = `
    (function() {
      if (window.localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('class', 'dark');
      } else if (window.localStorage.getItem('theme') === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('class', 'dark');
        // style="color-scheme: dark;"
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('class', 'light');
        localStorage.setItem('theme', 'light');
      }
    }());
  `
