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
