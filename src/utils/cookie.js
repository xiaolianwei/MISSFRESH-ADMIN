import Cookies from 'js-cookie';

export function setCookie(info) {
  Cookies.set('userInfo', JSON.stringify(info));
  return true;
}

export function getCookie() {
  const userInfo = Cookies.get('userInfo');
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return false;
}

export function removeCookie() {
  Cookies.remove('userInfo');
}

window.getCookie = getCookie;
