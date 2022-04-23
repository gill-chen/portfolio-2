function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementById("work-button").addEventListener('click', () => {
  scrollTo(document.getElementById("work"));
});
