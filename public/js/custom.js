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