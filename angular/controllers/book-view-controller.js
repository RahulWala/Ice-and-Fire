app.controller('bookviewController',['$http','$routeParams','gotservice',function 
	($http,$routeParams,gotservice) {
	
	var main = this;
	this.bookData = [];

	this.getBooks = function() {
		gotservice.getSingleBookDetail(main.bookId)
		.then (function successCallback(response) {
			main.bookData.push(response.data);
		})
	}
}])