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

const SyliusContactUs = () => {
  const element = document.querySelector('form[name=sylius_contact]');
  const url = '/en_US/send-contact-request';
  const validationElement = document.querySelector('[data-contact-us="error"]');

  element.addEventListener('submit', (e) => {
    const submitButton = document.querySelector('button[type=submit]');
    submitButton.setAttribute('disabled', 'disabled');
    submitButton.innerHTML = 'Sending...';

    e.preventDefault();

    const request = axios.post(url, serialize(element));

    request.then((response) => {
      validationElement.classList.remove('alert-danger');
      validationElement.classList.add('alert-success');
      validationElement.classList.remove('d-none');
      validationElement.innerHTML = response.data.message;
      submitButton.removeAttribute('disabled');
      submitButton.innerHTML = 'Send';
      document.querySelector('form[name=sylius_contact]').reset();
    });

    request.catch((error) => {
      validationElement.classList.remove('d-none');
      let validationMessage = '';

      validationMessage += error.response.data.message;
      error.response.data.errors.forEach(message => {
        validationMessage += `<li>${message}</li>`;
      })

      validationElement.innerHTML = validationMessage;
      element.classList.remove('loading');
      submitButton.removeAttribute('disabled');
      submitButton.innerHTML = 'Send';
    });
  });
};

export default SyliusContactUs;
