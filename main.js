//javascript code to execute show and hide menu 

function myFunction(){
   document.getElementById("nav-link").classList.toggle("show");
}

window.onclick=function(event) {
 if(!event.target.matches(".icon")){
   var dropdowns=document.getElementsByClassName("nav-links");
   var i;
   for(i=0; i<dropdowns.length; i++) {
      var openDropdown=dropdowns[i];
      if(openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
   }
 }
}

//Automatic text typing code
function typeText() {
  var text = "Join Beyart today and experience technology at full capacity.";
  var i = 0;
  setInterval(function() {
    document.getElementById("typing-container").innerHTML += text.charAt(i);
    i++;
    if (i == text.length) {
      clearInterval();
    }
  }, 100);
}

//Code to execute gallery automation
function autoScroll() {
  var galleryImages = document.querySelectorAll(".gallery img");
  var currentImage = 0;
  var maxImages = galleryImages.length - 1;

  setInterval(function() {
    galleryImages[currentImage].style.opacity = "0";
    currentImage = (currentImage === maxImages) ? 0 : currentImage + 1;
    galleryImages[currentImage].style.opacity = "1";
  }, 5000);
}

function enlargeImage(img) {
  // Get the current size of the image.
  var width = img.width;
  var height = img.height;

  // Create a new image element with the same dimensions as the original image.
  var enlargedImage = document.createElement("img");
  enlargedImage.width = width;
  enlargedImage.height = height;

  // Set the src of the new image to the src of the original image.
  enlargedImage.src = img.src;

  // Create a new div element to contain the enlarged image.
  var enlargedImageDiv = document.createElement("div");
  enlargedImageDiv.style.width = width + "200px";
  enlargedImageDiv.style.height = height + "150px";
  enlargedImageDiv.style.position = "absolute";
  enlargedImageDiv.style.top = "50%";
  enlargedImageDiv.style.left = "50%";
  enlargedImageDiv.style.transform = "translate(-50%, -50%)";

  // Add the enlarged image to the div element.
  enlargedImageDiv.appendChild(enlargedImage);

  // Show the div element.
  enlargedImageDiv.style.display = "block";
}

 
