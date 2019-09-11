    // scroll
    var scrollWindow = function() {
        $(window).scroll(function(){
            var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.ftco_navbar'),
                    sd = $('.js-scroll-wrap');

            if (st > 150) {
                if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');    
                }
            } 
            if (st < 150) {
                if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                }
            } 
            if ( st > 350 ) {
                if ( !navbar.hasClass('awake') ) {
                    navbar.addClass('awake');   
                }
                
                if(sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if ( st < 350 ) {
                if ( navbar.hasClass('awake') ) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if(sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    $(document).ready(function() {
        // Navigation color change 
        $(window).scroll(function() {
        var nav_img = $('.navbar-brand img');
        if ($(document).scrollTop() < 50) {
            nav_img.attr("src","http://localhost/id/public/img/lionred.png");
        } else {
            nav_img.attr("src","http://localhost/id/public/img/lion.png");
        }
        });
    });


/* slider start */
$(document).ready(function() {
  $("#mySlider").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item2").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item2")
            .eq(i)
            .appendTo(".carousel-dalam");
        } else {
          $(".carousel-item2")
            .eq(0)
            .appendTo($(this).find(".carousel-dalam"));
        }
      }
    }
  });
});

/* slider end */