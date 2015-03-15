define([], function() {

    var scrollToElement = (function() {

        var links = $('a'),
            positions = [],
            navigation = null;

        function scrollTo(e) {
            e.preventDefault();

            var href = $(this).attr('href').replace('#',''),
                element = $('a[name='+href+']');

            $('body').animate({
                scrollTop : (element.position().top - 100)
            },700);

            location.hash = href;

            return false;
        }

        function setLinks() {

            $.each(links, function() {
                var href = $(this).attr('href');
                if(/^#/.test(href)) {
                   $(this).click(scrollTo);
                }
            });

        }

        function collectPositions() {
            $('.scrollToAnchor').each(function() {
               positions.push($(this).position());
            });
        }

        function checkForNavigationSelection() {

            var counter = 0;
            $.each(positions, function(key, position) {
                if($(window).scrollTop() > position.top-100) {
                    counter++;
                }
            });

            counter--;

            navigation.find('a').removeClass('active');
            if(counter>=0) {
                navigation.find('a').eq(counter).addClass('active');
            }
        }

        return {
            init : function(navigationElement) {
                navigation = navigationElement;
                setLinks();
                collectPositions();
                $(window).scroll(checkForNavigationSelection);
                $(window).trigger('scroll');
            },

            setScrollToHandler : function(links) {
                $.each(links, function() {
                    $(this).click(scrollTo);
                });
            }
        }

    })();


    return scrollToElement;

});