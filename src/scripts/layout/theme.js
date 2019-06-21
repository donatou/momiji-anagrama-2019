// Testeo aquí arriba es donde van estos dos, slate los agarra y los compila, abajo no los pelaba, revisar los imports y partials. DXebe estar el theme.scss con los imports bien y estos igualitos al momiji.scss que se ha estado utilizando en todo el desarrollo. Hacer un pagespeed de google para revisar qué sheets de estilo quitamos.
//import '../../styles/theme.scss';
//import '../../styles/theme.scss.liquid';

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

// Testeo quitando estos styles, se pueden activar si algo no funciona
//import '../../styles/theme.scss';
//import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}
