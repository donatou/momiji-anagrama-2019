$(document).on('page:load page:change', () => {
  function replaceMP() {
    const mpImage = document.querySelector('img[alt="Mercado Pago"]');
    const mpLabel = document.querySelector('label[for="checkout_payment_gateway_38941884521"]');
    mpImage.remove();
    const myLabel = 'Pago con tarjeta de crédito';
    mpLabel.innerHTML = myLabel;
  }
  replaceMP();
});
