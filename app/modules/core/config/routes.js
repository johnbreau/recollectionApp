
/**
//  * @ngdoc object
//  * @name core.config
//  * @requires ng.$stateProvider
//  * @requires ng.$urlRouterProvider
//  * @description Defines the routes and other config within the core module
//  */
 angular.module('core').config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/');

//             *
//              * @ngdoc event
//              * @name core.config.route
//              * @eventOf core.config
//              * @description
//              *
//              * Define routes and the associated paths
//              *
//              * - When the path is `'/'`, route to home
//              * 


            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'modules/core/views/home.html',
                    controller: 'HomeController'
                })

                .state('dailyForm1', {
                    url: '/dailyForm1',
                    templateUrl: 'modules/core/views/dailyForm1.html'
                })

        }
    ]);















// original code from Yeoman generator angularjs-cordova...
// /**
//  * @ngdoc object
//  * @name core.config
//  * @requires ng.$stateProvider
//  * @requires ng.$urlRouterProvider
//  * @description Defines the routes and other config within the core module
//  */
// angular
//     .module('core')
//     .config(['$stateProvider',
//         '$urlRouterProvider',
//         function($stateProvider, $urlRouterProvider) {

//             $urlRouterProvider.otherwise('/');

//             *
//              * @ngdoc event
//              * @name core.config.route
//              * @eventOf core.config
//              * @description
//              *
//              * Define routes and the associated paths
//              *
//              * - When the path is `'/'`, route to home
//              * 
//             $stateProvider
//                 .state('home', {
//                     url: '/',
//                     templateUrl: 'modules/core/views/home.html',
//                     controller: 'HomeController'
//                 });
//         }
//     ]);
