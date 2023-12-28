

let value = document.querySelector('.value');
let total = document.querySelector('.total')

function updateCart() {

    total.innerHTML = parseInt( document.querySelector('.total').textContent ) + 1;
    let price = document.querySelector('.add').dataset.price
    console.log(price);

}