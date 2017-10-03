/* 
 * MEAN MVC Learning Project
 * Released under MIT License
 */

angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
    function ($scope, Authentication) {
        $scope.authentication = Authentication;
    }
]);
