app.factory('gotservice',function newService($http){
	var showData = {};
	var baseUrl = 'https://www.anapioficeandfire.com/api';

	//API for all books
	showData.getBooks = function() {
		return $http ({
			method: 'GET',
			url: baseUrl+'/books?page=1&pageSize=50'
		})
	}

	//API for details of a single book
	showData.getSingleBookDetail = function(item) {
		return $http ({
			method: 'GET',
			url: baseUrl+'/books/'+item
		})
	}

	//API for detail of character
	showData.getcharacterDetail = function (pageNo) {
		return $http ({
			method: 'GET',
			url: baseUrl+'/characters/'+item
		})
	}

	//API for detail of single character
	showData.getSingleCharacterDetail = function (item) {
		return $http ({
			method: 'GET',
			url: baseUrl+'/characters/'+item
		})
	}

	//API for detail of houses
	showData.getHouseDetail = function(page) {
		return $http ({
			method: 'GET',
			url: baseUrl+'/houses?page='+page+'&pageSize=50'
		})
	}
    

    //API for detail of single house
	showData.getSingleHouseDetail = function (houseItem) {
		return $http ({
			method: 'GET',
			url: baseUrl+'/houses/'+houseItem
		})
	}

	return showData;
})