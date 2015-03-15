define([], function() {

    function FormController($scope,$http) {

        $scope.send = function() {
            if($scope.contact.$valid) {

                var request = $http({
                    method: "post",
                    url: "/contactform.php",
                    data: {
                        email: $scope.email,
                        name: $scope.name,
                        text : $scope.text
                    },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });

                /* Check whether the HTTP Request is successful or not. */
                request.success(function (data) {
                    $scope.wasSent = data=='1';
                    $scope.email = '';
                    $scope.name = '';
                    $scope.text = '';

                });


            } else {

            }
        }

    }

    FormController.$inject = ["$scope","$http"];

    return FormController;

});