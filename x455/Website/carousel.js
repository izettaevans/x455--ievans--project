var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// slideshow - carousel
function currentDiv(n) {
  showDivs((slideIndex = n));
  myIndex = n;
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
}
// Function to change the main displayed image
function changeImage(imageSrc) {
    const mainImage = document.getElementById("Garden Map");
    mainImage.src = imageSrc;

    // Optional: Add/remove 'selected' class to highlight the current thumbnail
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove("selected");
        if (thumbnail.src.includes(imageSrc)) {
            thumbnail.classList.add("selected");
        }
    });

}
