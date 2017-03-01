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

			var Role = '';

			/**
			 * @ngdoc function
			 * @name addUser
			 * @description  adds user
			 * @param (object)
			 */
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

			/**
			 * @ngdoc function
			 * @name addEditUser
			 * @description adds edit user
			 * @param  (object)
			 */
			var addEditUser = function (object) {
				var usersArrayString = localStorage.getItem("usersArray");
				if (!usersArrayString) {
					usersArrayString = JSON.stringify(usersArrayDefault);
					setUsersArray(usersArrayString);
				}
				var usersArray = JSON.parse(usersArrayString);
				for (var i = 0; i < usersArray.length; i++) {
					if (object.id == usersArray[i].id) {
						usersArray[i] = object;
					}
				}
				usersArrayString = JSON.stringify(usersArray);
				setUsersArray(usersArrayString);
			};

			/**
			 * @ngdoc function
			 * @name setUsersArray
			 * @description  set users array
			 * @param  (array)
			 */
			var setUsersArray = function (array) {
				localStorage.setItem("usersArray", array);
			};

			/**
			 * @ngdoc function
			 * @name getUsersArray
			 * @description  set new array
			 * @returns(array)
			 */
			var getUsersArray = function () {
				var getUsers = localStorage.getItem("usersArray");
				if (getUsers) {
					return JSON.parse(getUsers);
				}
				else {
					return usersArrayDefault;
				}
			};

			/**
			 * @ngdoc function
			 * @name setRole
			 * @description  sets user's role
			 * @param(role)
			 */
			var setRole = function (role) {
				Role = role;
			};

			/**
			 * @ngdoc function
			 * @name getRole
			 * @description  gets user's role
			 * @returns(role)
			 */
			var getRole = function () {
				return Role;
			};

			/**
			 * @ngdoc function
			 * @name deleteUser
			 * @description  delete user
			 * @param (array, index)
			 */
			var deleteUser = function (array, index) {
				array[index].deleted = true;
				document.getElementById(index).setAttribute('class', 'deleted');
				setUsersArray(JSON.stringify(array));
			};

			return {
				addUser: addUser,
				getUsersArray: getUsersArray,
				deleteUser: deleteUser,
				setUsersArray: setUsersArray,
				setRole: setRole,
				getRole: getRole,
				addEditUser: addEditUser
			}

		}]);
})();