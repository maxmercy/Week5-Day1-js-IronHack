

function hideClick(){
$('#hide').on('click',function() {
  $('.container').fadeToggle(400);
})
}



function unicornMode(){
  $('#unicornmode').on('click',function(){
    $("body").css({background:'radial-gradient(ellipse farthest-corner at 400px 400px , #12fe5d 0%, rgba(0, 25, 10, 0) 50%, #988ede 95%)'});
    $("p").css({background:'radial-gradient(ellipse farthest-corner at 45px 45px , #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)'});
  })

}



function prevsumbit(){
$('.log').on('submit',function() {
    $("input").each(function() {
       if($(this).val() === "")
        event.preventDefault();
    });
      alert("You forgot one or more field");




})
}


$(document).on('ready', function() {
    prevsumbit()
})
