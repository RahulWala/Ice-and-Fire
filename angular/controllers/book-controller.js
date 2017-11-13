app.controller('bookController',['$http', 'gotservice', function ($http, gotservice) {
	var main = this;
	this.gotBookData = [];
	this.bookData = [];

	//Function Calling
	this.allBooks = function() {
		gotservice.getBooks()
		.then(function sucessCallback(response){
			main.gotBookData.push.apply(main.gotBookData,response.data);

		}, function errorCallback(response) {
			alert("Some error in GET method");
		}
		)
	}

	this.orderByField = 'name','released';
	this.reverseSort = false;
}]);