
const PRICELIST = {
    0: 249.99,
    1: 149.99,
    2: 299.99,
    3: 199.99
}



function updateCart(key) {
    let value = document.querySelector('.value');
    let total = document.querySelector('.total')
    total.innerHTML = parseInt( document.querySelector('.total').textContent ) + 1;

    value.innerHTML = (parseInt(value.textContent ) + PRICELIST[key])

    console.log(value.textContent);
    // let key = document.querySelector('.add').dataset.key
    console.log(PRICELIST[key]);

}