const parallax = document.querySelector('.parallax-general');
const element = parallax.children;

function moveElementDependsOnScroll(wScroll) {
  Array.from(element).forEach(layer => {
    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 10;

    layer.style.transform = `translateY(-${strafe}%)`;
  })
}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveElementDependsOnScroll(wScroll);
})