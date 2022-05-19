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
