/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

import axios from 'axios';
import serialize from 'form-serialize';

const SyliusAddToCart = (el) => {
  const element = el;
  const url = element.getAttribute('action');
  const redirectUrl = element.getAttribute('data-redirect');
  const validationElement = element.querySelector('[data-js-add-to-cart="error"]');

  element.addEventListener('submit', (e) => {
    const payload = JSON.parse(element.dataset.payload);
    let elements = serialize(element, { hash: true});

    // merge payload to elements
    const newPayload = {
      sylius_add_to_cart: {
        cartItem: payload,
        _token: elements.sylius_add_to_cart._token
      }
    };

    const request = axios.post(url, encodeURI(getUrlString(newPayload)));

    e.preventDefault();

    request.then(() => {
      validationElement.classList.add('d-none');
      window.location.href = redirectUrl;
    });

    request.catch((error) => {
      validationElement.classList.remove('d-none');
      let validationMessage = '';

      Object.entries(error.response.data).forEach(([, errorMessages]) => {
        errorMessages.errors.forEach(message => {
          validationMessage += `<li>${message}</li>`;
        });
      });

      validationElement.innerHTML = validationMessage;
      element.classList.remove('loading');
    });
  });
};

const serializeToJSON = str =>
  str.split('&')
    .map(x => x.split('='))
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: isNaN(value) ? value : Number(value)
    }),
{});

const getUrlString = (params, keys = [], isArray = false) => {
  const p = Object.keys(params).map(key => {
    let val = params[key]

    if ("[object Object]" === Object.prototype.toString.call(val) || Array.isArray(val)) {
      if (Array.isArray(params)) {
        keys.push("");
      } else {
        keys.push(key)
      }
      return getUrlString(val, keys, Array.isArray(val))
    } else {
      let tKey = key

      if (keys.length > 0) {
        const tKeys = isArray ? keys : [...keys, key]
        tKey = tKeys.reduce((str, k) => { return "" === str ? k : `${str}[${k}]` }, "")
      }
      if (isArray) {
        return `${ tKey }[]=${ val }`
      } else {
        return `${ tKey }=${ val }`
      }

    }
  }).join('&')

  keys.pop()
  return p
};

// add data-status on submit button to know which one is triggered
const buttons = document.querySelectorAll('form[name=sylius_add_to_cart] button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const target = button.dataset.target;
    const variant = button.dataset.variant || '';
    const domQty= document.querySelector(`#${target}`);
    const quantity = domQty.value !== null ? domQty.value : button.dataset.quantity;
    const form = document.querySelector('form[name=sylius_add_to_cart]');
    let payload = { quantity };

    if (variant.length) {
      payload = { ...payload, ...{ variant } };
    }

    form.setAttribute('data-payload', JSON.stringify(payload));
    form.classList.add('loading');
    document.querySelector('button#add_to_cart_final').click();
  });
});

export default SyliusAddToCart;


