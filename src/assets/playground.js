console.log('fulanito');

// variables
const imgMercado = document.querySelector('img[alt="Mercado Pago"]');
const myContainer = document.querySelector('label[for="checkout_payment_gateway_38941884521"]');
const myWrapper = document.querySelector('payment-method-wrapper');
console.log(myWrapper);

// replace function
function replaceGateway() {
  imgMercado.style.display = 'none';
  myContainer.insertAdjacentText('afterbegin', 'Pago con tarjeta de credito, debito, OXXO y SPEI');
}

replaceGateway();

document.onchange = function() {
  const imgMercado2 = document.querySelector('img[alt="Mercado Pago"]');
  const myContainer2 = document.querySelector('label[for="checkout_payment_gateway_38941884521"]');
  imgMercado2.style.display = 'none';

  // se necesita un IF para pintar este texto que sigue, si ya existia, no pintarlo de nuevo....
  if (myContainer2 !== 'null') {
    console.log('no existe');
    myContainer2.insertAdjacentText('afterbegin', 'Pago con tarjeta de credito, debito, OXXO y SPEI');
  }
};
