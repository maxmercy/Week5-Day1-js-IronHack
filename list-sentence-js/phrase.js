var phrases = [
  'Oh une super Lune!', 'Oh du chocolat!'
  , 'Oh un chat!',
  'Oh une souris!', 'Oh une ****!'
];

$(document).on('ready', function() {
  btnsentence() ;
  submit() ;
  showhide();
});



function showhide() {
      $(".showhidelink").on('click' , function(event){

        if ($('.showhidelink').text() == 'Show') {
          $('.showhidelink').html('Hide') ;
          listphrases() ;
        } else {
          $('.showhidelink').html('Show') ;
          $('#listphrases').empty() ;
        }
          event.preventDefault();
      });

}


function listphrases() {
      $.each(  phrases , function(index,value) {
      $('#listphrases').append('<li>'+ value+'</li>')
      });
}



function randomsentence() {
    var aleatory = Math.floor(phrases.length * Math.random());
    $('#radom-phrase').html(phrases[aleatory]) ;
}


function btnsentence() {
    $('.btn-chgsentence').on('click', function() {
      randomsentence()
    });

}


function submit() {
  $('#addSentence').submit( function (event) {
      event.preventDefault();
      phrases.push(  ( $('#userinput').val()) );
      $("form").trigger("reset");

  });

}
