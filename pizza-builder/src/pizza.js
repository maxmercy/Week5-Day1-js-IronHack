// Write your Pizza Builder JavaScript in this file.
$(document).on('ready', function() {
  pepperonni() ;
  mushroom() ;
  greenPepper();
  whiteSauce();
  glutenFree();

});


function pepperonni() {
  $('.btn-pepperonni').on('click', function() {
    $('[class~=pep]').fadeToggle(200) ;
    $('#pep-li').fadeToggle(200) ;
    $('.btn-pepperonni').toggleClass('active') ;

    var totalprice = $("strong").text().replace(/[^0-9]/gi, '');
    totalprice = parseInt(totalprice) ;
    if ($('.btn-pepperonni').hasClass('active')) {
      totalprice = totalprice + 1
    } else {
      totalprice = totalprice - 1
    }

    $('.total-price' ).text('$' + totalprice );

    })
}

function mushroom() {
  $('.btn-mushrooms').on('click', function() {
    $('[class~=mushroom]').fadeToggle(200) ;
    $('#mush-li').fadeToggle(200) ;
    $('.btn-mushrooms').toggleClass('active') ;

    var totalprice = $("strong").text().replace(/[^0-9]/gi, '');
    totalprice = parseInt(totalprice) ;
    if ($('.btn-mushrooms').hasClass('active')) {
      totalprice = totalprice + 1
    } else {
      totalprice = totalprice - 1
    }

    $('.total-price' ).text('$' + totalprice );
  })
}

function greenPepper() {
  $('.btn-green-peppers').on('click', function() {
    $('[class~=green-pepper]').fadeToggle(200) ;
    $('#gr-li').fadeToggle(200) ;
    $('.btn-green-peppers').toggleClass('active') ;

    var totalprice = $("strong").text().replace(/[^0-9]/gi, '');
    totalprice = parseInt(totalprice) ;
    if ($('.btn-green-peppers').hasClass('active')) {
      totalprice = totalprice + 1
    } else {
      totalprice = totalprice - 1
    }

    $('.total-price' ).text('$' + totalprice );
  })
}

function whiteSauce() {
  $('.btn-sauce').on('click', function() {
    $('[class~=sauce]').toggleClass('sauce-white') ;
    $('#wh-li').fadeToggle(200) ;
    $('.btn-sauce').toggleClass('active') ;

    var totalprice = $("strong").text().replace(/[^0-9]/gi, '');
    totalprice = parseInt(totalprice) ;
    if ($('.btn-sauce').hasClass('active')) {
      totalprice = totalprice + 3
    } else {
      totalprice = totalprice - 3
    }

    $('.total-price' ).text('$' + totalprice );
    })
}

function glutenFree() {
  $('.btn-crust').on('click', function() {
    $('[class~=crust]').toggleClass('crust-gluten-free') ;
    $('#gl-li').fadeToggle(200) ;
    $('.btn-crust').toggleClass('active') ;

    var totalprice = $("strong").text().replace(/[^0-9]/gi, '');
    totalprice = parseInt(totalprice) ;
    if ($('.btn-crust').hasClass('active')) {
      totalprice = totalprice + 5
    } else {
      totalprice = totalprice - 5
    }

    $('.total-price' ).text('$' + totalprice );
    })
}
