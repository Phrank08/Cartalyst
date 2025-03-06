import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/car.js';
// import '../data/backend-practice.js';

async function loadPage() {

  try{
    //throw 'error'
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw 'error2'
      loadCart(() => {
        // reject('error3')
       resolve('value1');
      });
    });
  } catch(error) {
    console.log('Unexpected error. Please try again later.')
  }
  

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}

loadPage()

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values)
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
})
  */

/*

new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });  

}).then((value) => {
  console.log(value)


  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
})

*/
/*

loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
})

*/

/*

const xhr = new XMLHttpRequest;

xhr.addEventListener('load', () => {
  console.log(xhr.response);
})
xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();
*/

/*

async function greeting() {
  const response = await fetch('https://supersimplebackend.dev/greeting');
  const data = response.text();
  console.log(data);
}

greeting();
*/

/*

async function postGreeting() {
  const response = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: 'Frank'})
  })

  const data = await response.text();
  console.log(data);
}

postGreeting();
*/


/*

async function getRequestAmazon() {
  try {
    const response = await fetch('https://amazon.com');
    const data = await response.text();
    console.log(data);
  } catch(error) {
    console.log('CORS error. Your request was blocked by the backend.');
  }
  }
  

getRequestAmazon();
*/

async function noBodyPostRequest() {

  try{
    const response = await fetch('https://supersimplebackend.dev/greeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })

    if(response.status >= 400) {
      throw response;
    }
  } catch(error) {
    if(error.status === 400) {
      const data = await error.text();
      console.log(data);
    }
  }
}

noBodyPostRequest();