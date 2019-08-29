export function RoutesConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	var getView = function(viewName) {
		return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
	};

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('app', {
			abstract: true,
			views: {
				header: {
					templateUrl: getView('header')
				},
			}
		})
		.state('app.recipe', {
			url: '/',
			views: {
				'main@': {
					templateUrl: getView('recipe')
				}
			}
		})
		.state('app.create_recipe', {
			url: '/recipe/create/',
			views: {
				'main@': {
					templateUrl: getView('create_recipe')
				}
			}
		})
		.state('app.edit_recipe', {
			url: '/recipe/edit/:id',
			views: {
				'main@': {
					templateUrl: getView('edit_recipe')
				}
			}
		});
}
