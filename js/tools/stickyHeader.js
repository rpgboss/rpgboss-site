define([], function() {

    var stickyHeader = (function() {

        var navi = $('.navigation');

        function stickyHeader() {
            if($(window).scrollTop() > 1) {
                navi.addClass("sticky");
            } else {
                navi.removeClass("sticky");
            }


        }

        return {
            init : function() {
                $(window).scroll(stickyHeader);
                $(window).trigger('scroll');
            }
        }

    })();


    return stickyHeader;

});