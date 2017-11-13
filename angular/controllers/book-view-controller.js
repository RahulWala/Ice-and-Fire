app.controller('bookViewController',['$http','$routeParams','gotservice',function($http,$routeParams,gotservice){
	
	var main = this;
	this.bookId = $routeParams.id1;
	this.bookData = [];

	this.getBooks = function(){
		gotservice.getSingleBookDetail(main.bookId)
		.then(function successCallback(response){
			main.bookData.push(response.data);
		})
	}
}])