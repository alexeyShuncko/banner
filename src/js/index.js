let arrLang = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh'];
let querylang =
  window.location.search.includes('?lang') && window.location.search.slice(6);

let langSyst = !querylang ? navigator.language : querylang;
let lang = arrLang.includes(langSyst) ? langSyst : 'en';

let restore = document.getElementById('restore');
let title = document.getElementById('title');
let unlimitedDocuments = document.getElementById('unlimitedDocuments');
let exp = document.getElementById('exp');
let noAds = document.getElementById('noAds');
let monthly = document.getElementById('monthly');
let perMonth = document.getElementById('perMonth');
let DAYSFREE = document.getElementById('DAYSFREE');
let priceMonth = document.getElementById('priceMonth');
let annually = document.getElementById('annually');
let perYear = document.getElementById('perYear');
let MOSTPOPULAR = document.getElementById('MOSTPOPULAR');
let priceMonth2 = document.getElementById('priceMonth2');
let autoRenewable = document.getElementById('autoRenewable');
let terms = document.getElementById('terms');
let privacy = document.getElementById('privacy');
let num83 = document.getElementById('num83');
let btn = document.querySelector('button');

fetch(`../Localizations/${lang}.json`)
  .then((response) => response.json())
  .then((json) => {
    restore.innerHTML = json['Restore'];
    title.innerHTML = json['Unlimited Access<br>to All Features'];
    unlimitedDocuments.innerHTML = json['Unlimited documents'];
    exp.innerHTML = json['Count mode'];
    noAds.innerHTML = json['Text recognition (OCR)'];
    monthly.innerHTML = json['Monthly'];
    perMonth.innerHTML = json[
      '<strong>{{price}}</strong><br>per month'
    ].replace('{{price}}', '$9.99');
    DAYSFREE.innerHTML = json['3 DAYS FREE'];
    priceMonth.innerHTML = json['{{price}}/month'].replace(
      '{{price}}/',
      '$1.99 '
    );
    annually.innerHTML = json['Annually'];
    perYear.innerHTML = json['<strong>{{price}}</strong><br>per year'].replace(
      '{{price}}',
      '$19.99'
    );
    MOSTPOPULAR.innerHTML = json['MOST POPULAR'];
    priceMonth2.innerHTML = json['{{price}}/month'].replace(
      '{{price}}/',
      '$1.99 '
    );
    autoRenewable.innerHTML = json['Auto-renewable. Cancel anytime.'];
    terms.innerHTML = json['Terms of Use'];
    privacy.innerHTML = json['Privacy Policy'];
    num83.innerHTML = json['-83%'];
    btn.innerHTML = json['Continue'];
  });

let price = document.getElementById('price');
let card1 = document.querySelector('[data-num="1"]');
let card2 = document.querySelector('[data-num="2"]');

price.addEventListener('click', (e) => {
  if (
    e.target.dataset.num == 1 ||
    e.target.parentNode.dataset.num == 1 ||
    e.target.parentNode.parentNode.dataset.num == 1
  ) {
    card1.classList.add('active');
    card2.classList.remove('active');
  } else if (
    e.target.dataset.num == 2 ||
    e.target.parentNode.dataset.num == 2 ||
    e.target.parentNode.parentNode.dataset.num == 2
  ) {
    card2.classList.add('active');
    card1.classList.remove('active');
  }
});

let a = ''.replace;

btn.addEventListener('click', () => {
  if (card1.classList.contains('active')) {
    window.location.href = 'https://apple.com/';
  } else {
    window.location.href = ' https://google.com/';
  }
});
