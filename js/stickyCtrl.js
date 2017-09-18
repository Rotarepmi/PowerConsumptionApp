app.controller('stickyCtrl', ['$scope', function ($scope) {
		
	$scope.load = function () {
		
		let topPannelY = $('.top-pannel').offset().top;

		let stickyPannel = function () {
			$(window).scrollTop() > topPannelY ? $('.top-pannel').addClass('stickyTopPannel') : $('.top-pannel').removeClass('stickyTopPannel');
		};

		stickyPannel();

		$(window).scroll( function () {
			stickyPannel();
		});
		
	};
	
	$scope.load();
		
}]);
