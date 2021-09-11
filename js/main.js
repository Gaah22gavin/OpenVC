
var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
  for(var activated = 0; activated < activeElements.length; activated++){
      activeElements[activated].classList.toggle("active");
  }
})

// ===========================
$(document).ready(function(){

    $('.menubar').on("click",function(){
      $(this).toggleClass('barOpen');
      $('header').toggleClass('open');
      console.log("heoll");
    });

  });
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
    slidesToScroll: 2,
    arrows:false,
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
          slidesToShow:1,
          slidesToScroll:1,
        }
      }
  ]
});


$(".slick-lock").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows:false,
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 1500,
      }        
    },

  {
    breakpoint:1024,
    settings:{
      slidesToShow:1,
      slidesToScroll:1,
    }
  }
]
});

});


// ==========================================

// var none = document.getElementById("more");
var ecco = document.getElementsByClassName("none");

// none.addEventListener('click',e=>{
//   ecco.classList.toggle('acti');

// });


$('#more').on('click', e=>{
  $('.none').toggleClass('acti');
})