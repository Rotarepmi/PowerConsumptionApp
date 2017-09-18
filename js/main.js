let app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {templateUrl: 'view/main.html', controller: 'stickyCtrl'});
}]);

app.directive('addMockup', function () {
	return { templateUrl: 'view/mockup.html' };
});

app.controller('appCtrl', ['$scope', '$compile', function ($scope, $compile) {
	
	let compiledHTML = $compile("<div add-Mockup></div>")($scope);
	
	$scope.mockupList = [];
	$scope.price = 0.52;
	$scope.dailyUse = 0;
	$scope.monthlyUse = 0;
	$scope.annualUse = 0;
	$scope.monthlyCost = 0;
	$scope.annualCost = 0;
	
	$scope.kitchenDevs = [
		{name: 'Czajnik elektryczny',
		 amount: 1,
		 power: 2200,
		 hours: 0,
		 minutes: 3,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Ekspres do kawy',
		 amount: 1,
		 power: 1000,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Piekarnik elektryczny',
		 amount: 1,
		 power: 3650,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Płyta ceramiczna',
		 amount: 1,
		 power: 6700,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Płyta indukcyjna',
		 amount: 1,
		 power: 7200,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Lodówka',
		 amount: 1,
		 power: 160,
		 hours: 7,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Zamrażarka',
		 amount: 1,
		 power: 170,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Okap',
		 amount: 1,
		 power: 200,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Kuchenka mikrofalowa',
		 amount: 1,
		 power: 900,
		 hours: 0,
		 minutes: 10,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Toster',
		 amount: 1,
		 power: 900,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Robot kuchenny',
		 amount: 1,
		 power: 450,
		 hours: 0,
		 minutes: 1,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Zmywarka do naczyń',
		 amount: 1,
		 power: 1800,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Podgrzewacz wody',
		 amount: 1,
		 power: 3500,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Żarówka oszczędna',
		 amount: 1,
		 power: 15,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Żarówka tradycyjna',
		 amount: 1,
		 power: 75,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		}
	];
	
	$scope.bathroomDevs = [
		{name: 'Bojler',
		 amount: 1,
		 power: 1500,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Podgrzewacz wody',
		 amount: 1,
		 power: 17300,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Wentylator',
		 amount: 1,
		 power: 20,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Pralka',
		 amount: 1,
		 power: 2000,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Dmuchawa łazienkowa',
		 amount: 1,
		 power: 2000,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Suszarka do włosów',
		 amount: 1,
		 power: 1400,
		 hours: 0,
		 minutes: 10,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Żarówka oszczędna',
		 amount: 1,
		 power: 15,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Żarówka tradycyjna',
		 amount: 1,
		 power: 75,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		}
	];
	
	$scope.roomDevs = [
		{name: 'Radio',
		 amount: 1,
		 power: 1700,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Komputer stacjonarny',
		 amount: 1,
		 power: 500,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Laptop',
		 amount: 1,
		 power: 60,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Telewizor',
		 amount: 1,
		 power: 150,
		 hours: 2,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'TV plazma',
		 amount: 1,
		 power: 250,
		 hours: 2,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'TV LCD',
		 amount: 1,
		 power: 100,
		 hours: 2,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'DVD/Video',
		 amount: 1,
		 power: 40,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Kino domowe',
		 amount: 1,
		 power: 100,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Odkurzacz',
		 amount: 1,
		 power: 1500,
		 hours: 0,
		 minutes: 20,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Żelazko',
		 amount: 1,
		 power: 2000,
		 hours: 0,
		 minutes: 20,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Żarówka oszczędna',
		 amount: 1,
		 power: 15,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Żarówka tradycyjna',
		 amount: 1,
		 power: 75,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		}
	];
	
	$scope.gardenDevs = [
		{name: 'Ogrzewanie akumulacyjne',
		 amount: 1,
		 power: 6000,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Ogrzewanie podłogowe',
		 amount: 1,
		 power: 2500,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Piec elektryczny',
		 amount: 1,
		 power: 9000,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Grzejnik elektryczny',
		 amount: 1,
		 power: 2000,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Kolektor słoneczny',
		 amount: 1,
		 power: 16,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Gruntowa pompa ciepła',
		 amount: 1,
		 power: 3000,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Oświetlenie zewnętrzne',
		 amount: 1,
		 power: 60,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Brama automatyczna',
		 amount: 1,
		 power: 1000,
		 hours: 0,
		 minutes: 20,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Kosiarka elektryczna',
		 amount: 1,
		 power: 1500,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Klimatyzator',
		 amount: 1,
		 power: 1200,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Oświetlenie energooszczędne',
		 amount: 1,
		 power: 12,
		 hours: 1,
		 minutes: 30,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		},
		{name: 'Inne',
		 amount: 1,
		 power: 1000,
		 hours: 1,
		 minutes: 0,
		 dailyUse: function () {
			 return this.amount * (this.power / 1000) * (this.hours + this.minutes / 60);
		 },
		 dailyCost: function () {
			 return this.dailyUse() * $scope.price;
		 }
		}
	];
	
	$scope.hideList = function () {
		$('ul.dropdown-list').hide();
	};
	
	$scope.toggleList = function () {
		$('ul.dropdown-list').toggle();
	};
	
	$scope.addMockup = function (name, amount, power, hours, minutes, dailyUse, dailyCost) {
		$scope.mockupList.push({compiledHTML, 
														amount: amount, 
														name: name, 
														power: power, 
														hours: hours, 
														minutes: minutes, 
														dailyUse: dailyUse,
														dailyCost: dailyCost
													 });
		updateValues();
	};
	
	$scope.deleteMockup = function (mockupIndex) {
		$scope.mockupList.splice(mockupIndex,1);
		updateValues();
	};
	
	$scope.changeOfValue = function (mockupIndex) {
		$scope.mockupList[mockupIndex].dailyUse = $scope.mockupList[mockupIndex].amount * ($scope.mockupList[mockupIndex].power / 1000) * ($scope.mockupList[mockupIndex].hours + $scope.mockupList[mockupIndex].minutes / 60);
		
		$scope.mockupList[mockupIndex].dailyCost = $scope.mockupList[mockupIndex].dailyUse * $scope.price;
		
		updateValues();
	};
	
	$scope.updatePrice = function () {
		updateValues();
	};
	
	function resetValues () {
		$scope.dailyUse = 0;
		$scope.monthlyUse = 0;
		$scope.annualUse = 0;
		$scope.monthlyCost = 0;
		$scope.annualCost = 0;
	}
	
	function updateValues () {
		resetValues();
		
		for(let i=0;i<$scope.mockupList.length;i++){
			$scope.dailyUse += $scope.mockupList[i].dailyUse;
			$scope.mockupList[i].dailyCost = $scope.mockupList[i].dailyUse * $scope.price;
		}
		
		$scope.monthlyUse = $scope.dailyUse * 30;
		$scope.annualUse = $scope.monthlyUse * 12;
		$scope.monthlyCost = $scope.monthlyUse * $scope.price;
		$scope.annualCost = $scope.annualUse * $scope.price;
	}
	
}]);