const items = document.querySelectorAll('.item');
const options = {
  root: null,
  rootMargin: "0px 0px -300px 0px",
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.classList.add('visible');
    }
  })
}, options)

items.forEach(item => {
  observer.observe(item);
})