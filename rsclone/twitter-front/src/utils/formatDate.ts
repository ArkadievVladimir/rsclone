import formatDistance from 'date-fns/formatDistance';
import ruLang from 'date-fns/locale/ru';
import engLang from 'date-fns/locale/en-GB';
import espLang from 'date-fns/locale/es';

let lang: object = {};

if (!localStorage.getItem('lang')) {
  lang = ruLang;
} else if (localStorage.getItem('lang') === 'ru') {
  lang = ruLang;
} else if (localStorage.getItem('lang') === 'eng') {
  lang = engLang;
} else if (localStorage.getItem('lang') === 'esp') {
  lang = espLang;
}

export const formatDate = (date: Date): string => {
  return formatDistance (
    date,
    new Date(),
    { locale: lang }
  );
};
