app.config(['$routeProvider',function($routeProvider){
	$routeProvider

	.when('/books',{
		templateUrl    : 'views/all-books.html',
		controller     : 'bookController',
		controllerAs   : 'bookCtrl'
	})

	.when('/books/:id1',{
		templateUrl    : 'views/book-detail-view.html',
		controller     : 'bookViewController',
		controllerAs   : 'bookVeCtrl'
	})

	.otherwise({
		redirectTo     : '/'
	})
}])
