// seleccionar el div de la imagen y borrarlo
const mercadoLogo = document.querySelector('.offsite-payment-gateway-logo');
mercadoLogo.remove();

// crear span
const mySpan = document.createElement('span');
mySpan.textContent = 'Pago tarjeta débito/crédito, efectivo y transferencia';

// inyectar el span en el div requerido
const myWrapper = document.querySelector('.content-box__emphasis');
myWrapper.appendChild(mySpan);


// const changingDiv = document.querySelector('.order-summary__section');
// changingDiv.addEventListener()


const selectElement = document.querySelector('.order-summary__section');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
  console.log(result);
});
