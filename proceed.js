/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) 
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function showForm() {
  var x = document.getElementById("regform");
  if (x.style.display === "none" || x.style.display=="") 
  {
    x.style.display = "block";
  } 
  else 
  {
    x.style.display = "none";
  }
}

function showMsgCat() {
  var x = document.getElementById("cat");
  if (x.style.display === "none" || x.style.display=="") 
  {
    x.style.display = "block";
  } 
  else 
  {
    x.style.display = "none";
  }
}

function showMsgDog() {
  var x = document.getElementById("dog");
  if (x.style.display === "none" || x.style.display=="") 
  {
    x.style.display = "block";
  } 
  else 
  {
    x.style.display = "none";
  }
}