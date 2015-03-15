define(['tools/scrollToElement'], function(scrollToElement) {

    var mobileMenu = (function() {

        var navi = $('.navigation'),
            mobilenavi = $('.mobilenavigation'),
            mobilenavicontainer = null;

        function checkMenu() {
            var width = $(window).width();

            if(width <= 600) {
                navi.hide();
                mobilenavi.removeClass('hide');
                mobilenavicontainer = navi.clone();
                mobilenavicontainer.removeClass('sticky');
                mobilenavicontainer.css('display','');
                mobilenavicontainer.addClass('mobileMenu');
                $('body').append(mobilenavicontainer);
                mobilenavicontainer.height($(document).height());
                console.log(scrollToElement)
                scrollToElement.setScrollToHandler(mobilenavicontainer.find('a'));
            } else {
                navi.show();
                mobilenavi.addClass('hide');
                $('.navigation.mobileMenu').remove();
            }
        }

        function triggerMobileMenu() {

                if($('.navigation.mobileMenu').hasClass('show')) {
                    $('.navigation.mobileMenu').removeClass('show');
                } else {
                    $('.navigation.mobileMenu').addClass('show');
                }
        }

        function checkMenuFixed() {
            if($(window).scrollTop() > 1) {
                mobilenavi.addClass('fixed');
            } else {
                mobilenavi.removeClass('fixed');
            }
        }

        return {
            init : function() {
                $(window).resize(checkMenu);
                $(window).scroll(checkMenuFixed);
                $(window).trigger('resize');
                $(window).trigger('scroll');
                mobilenavi.find('img').click(triggerMobileMenu);
            }
        }

    })();


    return mobileMenu;

});