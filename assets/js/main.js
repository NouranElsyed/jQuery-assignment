// $('#open-nav').click(function(){
//   $('.side-nav').animate({width:'270px'} , 250);
//   $('.body').animate({marginLeft:'270px'} , 250);

// });

// $('.close').click(function(){
//   $('.side-nav').animate({width:'0px'},250);
//   $('.body').animate({marginLeft:'0px'} , 250)

// })

$('#open-nav').click(function(){
  $('.side-nav').animate({width:'270px'} , {duration: 300, queue: false});
  $('.body').animate({marginLeft:'270px'} , {duration: 300, queue: false});

});

$('.close').click(function(){
  $('.side-nav').animate({width:'0px'},{duration: 300, queue: false});
  $('.body').animate({marginLeft:'0px'} , {duration: 297, queue: false})

})
// &-------------------------------------

$('a').click(function(eventInfo){
    
  const positionOfSection = $(eventInfo.target.getAttribute('href')).offset().top;
  
  $("html , body").animate({scrollTop:positionOfSection},2500);
  
})

// &-----------------------------------
$('.singerOne').click(function(){
  
  $('.blockOne').slideToggle(500)
})

$('.singerTwo').click(function(){
  
  $('.blockTwo').slideToggle(500)
})

$('.singerThree').click(function(){
  
  $('.blockThree').slideToggle(500)
})
$('.singerFour').click(function(){
  
  $('.blockFour').slideToggle(500)
})





window.onload = function() {
   
  countDown("31 january 2024 23:59:59");
}

function countDown(date) {

      let bigDate = new Date(date).getTime();
      let dateNow = new Date().getTime();
      
      timeDifference = (bigDate- dateNow) / 1000 ;
      
      let days = Math.floor( timeDifference / (24*60*60));
      let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
      let minutes = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
      let seconds = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (minutes * 60)))


    $(".days").html(`${days} d`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ minutes } m`);
    $('.seconds').html(`${ seconds} s`)


    setInterval(function() {countDown(date); }, 1000);
}









var maxCharacters = 100;
$('textarea').keyup(function() {
  var length = $('textarea').val().length;
  var characterRemaining = maxCharacters-length;
  if(characterRemaining<=0){
     $("#characters").text("your available character finished");
    }else{
        $("#characters").text(characterRemaining);
        }
});
