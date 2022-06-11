console.log(
  '%c Welcome to boilerplate-webpack by Mythology Labs! ',
  'background: #21557d; border: 1px solid #fff; padding: 4px; padding-top: 10px; padding-bottom: 8px;'
);
console.log(
  '%c Created by https://tris.codes 💠 improved by http://mythologylabs.com.uy',
  'background: #e4b349; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px; color:#21557d;'
);

import Handlebars from 'handlebars';
import i18next from 'i18next';
import registerI18nHelper from 'handlebars-i18next';

// add custom js below
i18next.init({
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    },
    es: {
      translation: {
        "key": "hola mundo"
      }
    }
  }
}, function(err, t) {
  // initialized and ready to go!
  document.getElementById('output').innerHTML = i18next.t('key');
});

registerI18nHelper(Handlebars, i18next);