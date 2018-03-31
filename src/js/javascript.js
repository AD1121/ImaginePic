
/* declaring the year in copyright */
var d = new Date();
var fullYear = d.getFullYear();

document.getElementById("year").innerHTML = fullYear;
/* ---------------------------------------------------------------------------------------- */

/* Event for Modal */
$(document).ready(function(){
  $('.popupimage').click(function(event){
    event.preventDefault();
    $('.modal img').attr('src', $(this).attr('href'));
    $('.modal').modal('show');
  });
});
/* ---------------------------------------------------------------------------------------- */

/* ParticaleJS*/
particlesJS.load('intro', 'particles.json', function(){
    console.log('particles.json loaded...');
});
/* ---------------------------------------------------------------------------------------- */
