import AuthLogo from './extensions/logo-white.png';
import MenuLogo from './extensions/logo-white.png';
import favicon from './extensions/favicon.ico';

const config = {
  auth: {
    logo: AuthLogo,
  },
  head: {
    favicon: favicon,
  },
  menu: {
    logo: MenuLogo,
  },
  locales: ['it'],
  theme: {
    dark: {
      colors: {

        /**
         * Riferimento colori originali:
         * https://github.com/strapi/design-system/blob/main/packages/strapi-design-system/src/themes/darkTheme/dark-colors.ts
         */

        alternative100: '#181826',
        alternative200: '#4a4a6a',
        alternative500: '#ac73e6',
        alternative600: '#ac73e6',
        alternative700: '#e0c1f4',
        buttonNeutral0: '#000000', //cambiato
        buttonPrimary500: '#6d8cc5', //cambiato --> Hover su bottone
        buttonPrimary600: '#f8f7f6', //cambiato --> Bg bottone
        danger100: '#282828', //cambiato --> colore sfondo pulsanti pericolo
        danger200: '#302e2e', //cambiato --> colore bordo pulsanti pericolo
        danger500: '#ee5e52',
        danger600: '#ee5e52',
        danger700: '#ee5e52',
        neutral0: '#1d1d1b', //cambiato --> Sfondo principale menu e hover di alcuni bottoni
        neutral100: '#000000', //cambiato --> Sfondo principale Admin
        neutral1000: '#f8f7f6', //cambiato
        neutral150: '#302E2E', //cambiato
        neutral200: '#302E2E', //cambiato
        neutral300: '#666687',
        neutral400: '#f8f7f6', // cambiato
        neutral500: '#c0c0cf',
        neutral600: '#f8f7f6', // cambiato
        neutral700: '#eaeaef',
        neutral800: '#f8f7f6', //cambiato
        neutral900: '#f8f7f6', //cambiato
        primary100: '#282828', //cambiato --> sfondo alcuni box
        primary200: '#302e2e', //cambiato --> bordo di alcuni box
        primary500: '#4945ff',
        primary600: '#6d8cc5', // cambiato
        primary700: '#6d8cc5', // cambiato
        secondary100: '#282828', // cambiato --> sfondo alcuni box e pulsanti neutri
        secondary200: '#302e2e', // cambiato --> bordo di alcuni box e pulsanti neutri
        secondary500: '#66b7f1',
        secondary600: '#66b7f1',
        secondary700: '#b8e1ff',
        success100: '#282828', // cambiato --> colore sfondo su successo
        success200: '#302e2e', // cambiato --> colore bordo su successo
        success500: '#5cb176',
        success600: '#cce0bc', // cambiato  --> colore testo su successo
        success700: '#c6f0c2',
        warning100: '#181826',
        warning200: '#4a4a6a',
        warning500: '#f29d41',
        warning600: '#f29d41',
        warning700: '#fae7b9',
      }
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
