const menubarBtn = document.querySelector('.header-top i')
menubarBtn.addEventListener('click', function(){
    document.querySelector('.header-top ul').classList.toggle('active')
})





// Get the modal
var modal = document.getElementById('id01');
var modal = document.getElementById('id02');
var modal = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}