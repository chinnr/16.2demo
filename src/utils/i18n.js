import lang from '../locale/lang';

function mapLang(_lang) {
  let msg = {};
  const en = {};
  const zh = {};
  const tw = {};
  for (const item in _lang) {
    en[item] = _lang[item].en;
    zh[item] = _lang[item].zh;
    tw[item] = _lang[item].tw;
  }
  msg = { en, zh, tw };
  return msg;
}

const MESSAGES = mapLang(lang);

export default function i18n(key, options) {
  const msg = MESSAGES[options][key];
  if (msg == null) {
    return key;
  }
  return msg;
}
