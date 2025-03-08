import { getOrder } from '../data/orders.js';
import { getProduct, loadProductsFetch } from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { cart } from '../data/cart.js';

let cartQuantity = 0;

cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity;
});

const cartQuantityElement = document.querySelector('.js-tracking-cart-quantity');
if (cartQuantityElement) {
  cartQuantityElement.textContent = cartQuantity;
}

async function loadPage() {
  await loadProductsFetch();

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');

  const order = getOrder(orderId);

  if (!order) {
    console.error('Order not found for order ID:', orderId);
    return;
  }

  let trackingHTML = `
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>
  `;

  order.products.forEach((productDetails) => {
    const product = getProduct(productDetails.productId);

    if (!product) {
      console.error('Product not found for product ID:', productDetails.productId);
      return;
    }

    const today = dayjs();
    const orderTime = dayjs(order.orderTime);
    const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);
    const percentProgress = ((today - orderTime) / (deliveryTime - orderTime)) * 10000;

    // Extra feature: display "delivered" on the tracking page
    // if today's date is past the delivery date.
    const deliveredMessage = today < deliveryTime ? 'Arriving on' : 'Delivered on';

    trackingHTML += `
      <div class="delivery-date">
        ${deliveredMessage} ${
          dayjs(productDetails.estimatedDeliveryTime).format('dddd, MMMM D')
        }
      </div>
      <div class="product-info">
        ${product.name}
      </div>
      <div class="product-info">
        Quantity: ${productDetails.quantity}
      </div>
      <img class="product-image" src="${product.image}">
      <div class="progress-labels-container">
        <div class="progress-label ${
          percentProgress < 50 ? 'current-status' : ''
        }">
          Preparing
        </div>
        <div class="progress-label ${
          (percentProgress >= 50 && percentProgress < 100) ? 'current-status' : ''  
        }">
          Shipped
        </div>
        <div class="progress-label ${
          percentProgress >= 100 ? 'current-status' : ''
        }">
          Delivered
        </div>
      </div>
      <div class="progress-bar-container">
        <div class="js-progress-bar progress-bar" data-testid="progress-bar" style="width: ${percentProgress}%;"></div>
      </div>
    `;
  });

  const orderTrackingElement = document.querySelector('.js-order-tracking');
  if (orderTrackingElement) {
    orderTrackingElement.innerHTML = trackingHTML;
  } else {
    console.error('Order tracking element not found in the DOM.');
  }
}

loadPage();