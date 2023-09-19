const orderWrapper = document.querySelector('.orderWrapper');
const iconClose = document.querySelector('.icon-close');
const buttonAddcart = document.querySelectorAll('.buttonAdd-cart');

// 获取订单内容
const orderSummary = document.querySelector('.order-summary');

buttonAddcart.addEventListener('click', () => {
    orderWrapper.classList.add('active-popup');
});

