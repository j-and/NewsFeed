(function () {
	'use strict';
	angular.module('NewsFeed')
		.factory('usersService', [function () {

			var usersArrayDefault = [
				{
					date: '10.10.2016',
					email: "johndoe@gmail.com",
					id: '',
					name: "John Doe",
					password: '',
					role: 'user',
					status: 'pending'
				},
				{
					date: '11.10.2016',
					email: "paulsmith@gmail.com",
					id: '',
					name: "Paul Smith",
					password: '',
					role: 'admin',
					status: 'approved'
				},
				{
					date: '12.10.2016',
					email: "edgarpo@gmail.com",
					id: '',
					name: "Edgar Po",
					password: '',
					role: 'user',
					status: 'pending'
				},
				{
					date: '13.10.2016',
					email: "jlo@gmail.com",
					id: '',
					name: "J Lo",
					password: '',
					role: 'user',
					status: 'pending'
				}
			];

			var addUser = function (object) {
				// 1. localStorage get arrayUsers
				// 2. parse string to array
				// 3. array.push new user
				// 4. set to local storage

				var usersArrayString = localStorage.getItem("usersArray");
				if (!usersArrayString) {
					usersArrayString = JSON.stringify(usersArrayDefault);
					localStorage.setItem("usersArray", usersArrayString);
				}
				var usersArray = JSON.parse(usersArrayString);
				usersArray.push(object);
				usersArrayString = JSON.stringify(usersArray);
				localStorage.setItem("usersArray", usersArrayString);
				setUsersArray(usersArrayString)

			};

			var setUsersArray = function (array) {
				localStorage.setItem("usersArray", array);
			};

			var getUsersArray = function () {
				return JSON.parse(localStorage.getItem("usersArray"));
			};

			return {
				addUser: addUser,
				getUsersArray: getUsersArray
			}

		}]);
})();