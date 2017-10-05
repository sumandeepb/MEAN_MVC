/* 
 * MEAN MVC Learning Project
 * Released under MIT License
 */

angular.module('example').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'example/views/example.client.view.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);
