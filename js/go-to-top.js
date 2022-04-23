//Get the button:
mybutton = document.getElementById("go-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    // For Safari
// For Chrome, Firefox, IE and Opera
}
