import axios from 'axios'
import Noty from 'noty'
import initAdmin from './admin'
console.log(initAdmin);
let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter= document.querySelector('#cartCounter')
function updateCart(pizza){
    axios.post('/update-cart',pizza).then((res)=>{
            cartCounter.innerText = res.data.totalQty
            new Noty({
                type: 'success',
                timeout: 1000,
                text: 'item added to cart'
              }).show();
    }).catch(err => {
        new Noty({
            type: 'success',
            timeout: 1000,
            text: 'Something Went Wrong'
          }).show();
    })
}
addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // console.log(e)
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
        
    })
})

//Remove alert message after X seconds

const alertMsg = document.querySelector('#success-alert')
if(alertMsg){
    setTimeout(() => {
        alertMsg.remove()
    }, 2000)
}

initAdmin()
