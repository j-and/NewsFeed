(function () {
	'use strict';
	angular.module('NewsFeed')
		.factory('usersService', [function () {

			var usersArrayDefault = [
				{
					date: '10.10.2016',
					deleted: false,
					email: "johndoe@gmail.com",
					id: '0',
					name: "John Doe",
					password: '',
					role: 'user',
					status: 'pending'
				},
				{
					date: '11.10.2016',
					deleted: false,
					email: "paulsmith@gmail.com",
					id: '1',
					name: "Paul Smith",
					password: '',
					role: 'admin',
					status: 'approved'
				},
				{
					date: '12.10.2016',
					deleted: false,
					email: "edgarpo@gmail.com",
					id: '2',
					name: "Edgar Po",
					password: '',
					role: 'user',
					status: 'pending'
				},
				{
					date: '13.10.2016',
					deleted: false,
					email: "jlo@gmail.com",
					id: '3',
					name: "J Lo",
					password: '',
					role: 'user',
					status: 'pending'
				}
			];

			var addUser = function (object) {
				var usersArrayString = localStorage.getItem("usersArray");
				if (!usersArrayString) {
					usersArrayString = JSON.stringify(usersArrayDefault);
					localStorage.setItem("usersArray", usersArrayString);
				}
				var usersArray = JSON.parse(usersArrayString);
				usersArray.push(object);
				usersArrayString = JSON.stringify(usersArray);
				setUsersArray(usersArrayString)

			};

			var setUsersArray = function (array) {
				localStorage.setItem("usersArray", array);
			};

			var getUsersArray = function () {
				return JSON.parse(localStorage.getItem("usersArray"));
			};

			var deleteUser = function (array, index) {
				array[index].deleted=true;
				document.getElementById(index).setAttribute('class', 'deleted');
				setUsersArray(JSON.stringify(array));
			};

			return {
				addUser: addUser,
				getUsersArray: getUsersArray,
				deleteUser: deleteUser,
				usersArrayDefault: usersArrayDefault,
				setUsersArray: setUsersArray
			}

		}]);
})();