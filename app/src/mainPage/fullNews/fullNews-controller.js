(function () {
'use strict';

angular.module('NewsFeed')
	.controller('fullNewsCtrl', ['$scope',function($scope) {
	$scope.news = {
		author: 'John Doe',
		summary: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. ",
		tag:'#accident',
		text: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.",
		theme:'Belarus',
		time: '11:25',
		title: 'Accident'
	}
}]);
})();
