/* 
 * MEAN MVC Learning Project
 * Released under MIT License
 */

var appName = 'mean';
var app = angular.module(appName, ['ngResource', 'ngRoute', 'example', 'users']);

angular.element(document).ready(function () {
    angular.bootstrap(document, [appName]);
});

app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';