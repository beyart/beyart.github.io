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

 window.onload = function() { 
   var themeSwitcher = document.querySelector('.theme-switcher'); 
   themeSwitcher.addEventListener('click', function() { var currentTheme = document.body.className; 
   document.body.className = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light'; 
 }); 
 }

 
