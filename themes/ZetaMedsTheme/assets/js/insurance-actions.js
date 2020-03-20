import axios from 'axios';

document.getElementById('add-health-info').addEventListener('click', function () {
  let container = $('#health-info-container');
  let button = this;
  let count = button.dataset.count;
  count++;
  this.dataset.count = count;
  let url = '/en_US/add-health-info/' + count;

    axios.get(url)
      .then((response) => {
        const dom = response.data.dom;
        container.append(dom);
      });
});

$(function () {
  $('[data-toggle="popover"]').popover()

  function insuranceFormEvent(option, fn) {
    if (option.checked && option.value === 'PAY_VIA_INSURANCE') {
      fn();
    }
  }

  document.querySelectorAll('[data-paymentmethod]').forEach((option) => {
    option.addEventListener('click', (e) => {
      insuranceFormEvent(e.srcElement, () => {
        $('#insurance-modal').modal('show');
      });
    });
  });

  if (document.querySelector('[data-paymentmethod]')) {
    document.querySelector('[data-paymentmethod]:checked').click();
  }


  // Checkout Payment
  const paymentOptionForm = document.querySelector('form[name=sylius_checkout_select_payment]');
  if (paymentOptionForm) {
    paymentOptionForm.addEventListener('submit', (e) => {
      const paymentMethod = document.querySelectorAll('[data-paymentmethod]').forEach((option) => {
        insuranceFormEvent(option, () => {
          console.log('submit insurance form');
        });
      });
    });
  }
})
