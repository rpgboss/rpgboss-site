require([
    'controller/formController',
    'tools/stickyHeader',
    'tools/scrollToElement',
    'tools/mobileMenu'
], function(formController,stickyHeader,scrollToElement,mobileMenu) {

    var app = angular.module('rpgboss',[]);
    app.controller('FormController',formController);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['rpgboss']);
        FastClick.attach(document.body);

        stickyHeader.init();
        scrollToElement.init($('.navigation'));
        mobileMenu.init();
    });

});