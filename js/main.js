

// ===========================
$(document).ready(function(){

    $('.wrapper-menu').on("click",function(){
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
      $('header').toggleClass('posi');
    });

  });

  var wrapperMenu = document.querySelector('.wrapper-menu');
    wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');  
  })
  // ============================


var acc = document.getElementsByClassName("accordion");
var spn = document.querySelectorAll('.span');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

     for(var i =0; i < spn.length; i++){
      spn[i].addEventListener('click',e=>{
         spn[0].innerHTML = "-";
     });
    };
  });

  
}


// =================slick====================

$(document).on('ready', function(){

$(".ourplat").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive:[        
      {
        breakpoint:480,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          autoplay: true,
          autoplaySpeed: 1500,
        }        
      },

      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
  ]
});


$(".slick-lock").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  nextArrow:"#right",
  prevArrow:"#left",
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:2,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false,
      }        
    },

  {
    breakpoint:1024,
    settings:{
      slidesToShow:3,
      slidesToScroll:1,
      arrows:false,
    }
  }
]
});

});


// ==========================================

// // var none = document.getElementById("more");
// var ecco = document.getElementsByClassName("none");

// // none.addEventListener('click',e=>{
// //   ecco.classList.toggle('acti');

// // });

let less = true;

$('#more').on('click', e=>{
  $('.none').toggleClass('acti');

  if(less == true){
    $("#more").html("Read Less");
    less = false;
  }else if(less == false){
    $("#more").html("Read more");
    less = true;
  };
 
})


$(document).ready(function(){
	$('.acc h3').click(function(){
		$(this).next('.content').slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().children('.content').slideUp();
		$(this).parent().siblings().removeClass('active');
	});
});













// ====================================================


$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });