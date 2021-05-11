$(document).ready(function () {
 
  const owl = $(".slide");
  const prev = `<span class='icon-ifa ifa-118'></span>`;
  const next = `<span class='icon-ifa ifa-117'></span>`;
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoWidth:true,
    navText: [prev, next],
    responsive: {
      0: {
        items: 2,
        
      },
      600: {
        items: 2,
        margin: 5,
      },

      1000: {
        margin: 10,
        items: 4,
      },
    },
  });
 
  $(".menu .item-link[data-slides]").on("click", function () {
    //buton
    const index = $(this).data("slides");
    if ($(this).data("slides") == index) {
      $(".list .item .item-link[data-slides]").removeClass("activx");

      $(this).addClass("activx");
    }

    
    //Slides
    $(".slides .slide-area" + "[data-slides]").removeClass(
      "active"
    );
    // var val=$(this).attr("data-slides");
    $(".slides .slide-area[data-slides=" + index + "]").addClass(
      "active"
    );
  
  });


  

  //slide-2
  // $(".sub-slide .subslide-item .subslide-img[data-p]").on("click", function () {
  //   const rank = $(this).data("p");
  //   $(".slide .slide-link .slide-img" + "[data-p]").removeClass(
  //     "slide-link activey"
  //   );
  //   $(".slide .slide-link .slide-img[data-p=" + rank + "]").addClass(
  //     "slide-link activey"
  //   );
  // });
  
  const owl2 = $(".sub-slide");
  owl2.owlCarousel({
    loop: true,
    margin:10,
    nav: false,
    dots: false,
    items: 4,
    autoWidth:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            
        },
        990:{
            items:3,
        },
        1000:{
            items:4
        }
    }
  });
});
