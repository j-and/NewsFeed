(function () {
	'use strict';
	angular.module('NewsFeed')
		.factory('usersService', [function () {
			var usersArray = [
				{
					date:'10.10.2016',
					email: "johndoe@gmail.com",
					id: '',
					name: "John Doe",
					status:'user'
				},
				{
					date:'11.10.2016',
					email: "paulsmith@gmail.com",
					id: '',
					name: "Paul Smith",
					status:'admin'
				},
				{
					date:'12.10.2016',
					email: "edgarpo@gmail.com",
					id: '',
					name: "Edgar Po",
					status:'user'
				},
				{
					date:'13.10.2016',
					email: "jlo@gmail.com",
					id: '',
					name: "J Lo",
					status:'user'
				}
			];

			return {
				usersArray: usersArray,

				addUser: function (object) {
					usersArray.push(object);
					console.log('usersArray.length+' + usersArray.length);
				}
			}
		}]);
})();