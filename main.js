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
  var text = "This is the text that will continue typing.";
  var i = 0;
  setInterval(function() {
    document.getElementById("typing-container").innerHTML += text.charAt(i);
    i++;
    if (i == text.length) {
      clearInterval();
    }
  }, 50);
}
