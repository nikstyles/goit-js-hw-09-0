const btnAdd = document.querySelector('.btn--calc');
const valueInputIce = document.querySelector('.ice');
const valueInputCoffee = document.querySelector('#qty-coffee');
const valueInputShake = document.querySelector('.shake');

const outputTotal = document.querySelector('.total');
const outputAmount = document.querySelector('.amount');

let total = 0;
let amount = 0;

btnAdd.addEventListener('click', function () {

    
    
    const ice = Number(valueInputIce.value);
    const coffee = Number(valueInputCoffee.value);
    const shake = Number(valueInputShake.value);
    amount = ice + coffee + shake;
    
    total = `$ ${amount * 4.25}`;

    outputTotal.textContent = total;
    outputAmount.textContent = amount;
})