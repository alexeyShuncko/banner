let arrLang = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh'];
let querylang =
  window.location.search.includes('?lang') && window.location.search.slice(6);

let langSyst = !querylang ? navigator.language : querylang;
let lang = arrLang.includes(langSyst) ? langSyst : 'en';

let container = document.getElementById('qwer');

fetch(`../Localizations/${lang}.json`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    container.textContent = json['Unlimited documents'];
  });
