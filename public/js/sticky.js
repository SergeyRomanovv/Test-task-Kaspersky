window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

const header = document.querySelector('.header');

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};

const buyBody = document.querySelector('.buy-body');
const stickyBuy = document.querySelector('.sticky-buy-none');
const btnCoord = buyBody.getBoundingClientRect();

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  // eslint-disable-next-line no-unused-expressions
  currentScrollPos > btnCoord.bottom ? stickyBuy.className = 'sticky-buy-body' : stickyBuy.className = 'sticky-buy-none';
};

const productBtn = document.querySelector('.product-btn');

productBtn.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo(btnCoord.x, btnCoord.y);
});
