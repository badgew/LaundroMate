
// toggle the burger menu
$( ".burger" ).click(function(e) {
  e.preventDefault();
  $(e.currentTarget).toggleClass('active');
  $('body').toggleClass('active-burger');
  return
});