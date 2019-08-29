/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(6);

	__webpack_require__(13);

	__webpack_require__(17);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('app', ['app.filters', 'app.services', 'app.components', 'app.routes', 'app.config', 'partialsModule']);

	angular.module('app.routes', []);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.config', []);
	angular.module('app.components', ['ui.router', 'angular-loading-bar', 'restangular', 'ngStorage', 'ngCookies', 'ui.bootstrap']);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _loading_bar = __webpack_require__(3);

	angular.module('app.config').config(_loading_bar.LoadingBar);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	LoadingBar.$inject = ["cfpLoadingBarProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadingBar = LoadingBar;
	function LoadingBar(cfpLoadingBarProvider) {
		'ngInject';

		cfpLoadingBarProvider.includeSpinner = false;
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _RoutesConfig = __webpack_require__(5);

	angular.module('app.routes').config(_RoutesConfig.RoutesConfig);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		'ngInject';

		var getView = function getView(viewName) {
			return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
		};

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('app', {
			abstract: true,
			views: {
				header: {
					templateUrl: getView('header')
				}
			}
		}).state('app.recipe', {
			url: '/',
			views: {
				'main@': {
					templateUrl: getView('recipe')
				}
			}
		}).state('app.create_recipe', {
			url: '/recipe/create/',
			views: {
				'main@': {
					templateUrl: getView('create_recipe')
				}
			}
		}).state('app.edit_recipe', {
			url: '/recipe/edit/:id',
			views: {
				'main@': {
					templateUrl: getView('edit_recipe')
				}
			}
		});
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _capitalize = __webpack_require__(7);

	var _human_readable = __webpack_require__(8);

	var _truncate_characters = __webpack_require__(9);

	var _truncate_words = __webpack_require__(10);

	var _trust_html = __webpack_require__(11);

	var _ucfirst = __webpack_require__(12);

	angular.module('app.filters').filter('capitalize', _capitalize.CapitalizeFilter).filter('humanReadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
		return function (input) {
			return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : '';
		};
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
		return function humanize(str) {
			if (!str) {
				return '';
			}
			var frags = str.split('_');
			for (var i = 0; i < frags.length; i++) {
				frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
			}
			return frags.join(' ');
		};
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
		return function (input, chars, breakOnWord) {
			if (isNaN(chars)) {
				return input;
			}
			if (chars <= 0) {
				return '';
			}
			if (input && input.length > chars) {
				input = input.substring(0, chars);

				if (!breakOnWord) {
					var lastspace = input.lastIndexOf(' ');
					// Get last space
					if (lastspace !== -1) {
						input = input.substr(0, lastspace);
					}
				} else {
					while (input.charAt(input.length - 1) === ' ') {
						input = input.substr(0, input.length - 1);
					}
				}
				return input + '...';
			}
			return input;
		};
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
		return function (input, words) {
			if (isNaN(words)) {
				return input;
			}
			if (words <= 0) {
				return '';
			}
			if (input) {
				var inputWords = input.split(/\s+/);
				if (inputWords.length > words) {
					input = inputWords.slice(0, words).join(' ') + '...';
				}
			}
			return input;
		};
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
		return function (input) {
			if (!input) {
				return null;
			}
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		};
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _recipe = __webpack_require__(14);

	var _createRecipeForm = __webpack_require__(15);

	var _editRecipeForm = __webpack_require__(16);

	angular.module('app.components').component('recipeComponent', _recipe.RecipeComponent).component('createRecipeFormComponent', _createRecipeForm.CreateRecipeFormComponent).component('editRecipeFormComponent', _editRecipeForm.EditRecipeFormComponent);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RecipeController = function () {
		RecipeController.$inject = ["API", "$injector"];
		function RecipeController(API, $injector) {
			'ngInject';

			_classCallCheck(this, RecipeController);

			this.API = API;
			this.list = [];
			this.favIngredients = [];
			this.modal = $injector.get('$uibModal');
		}

		_createClass(RecipeController, [{
			key: '$onInit',
			value: function $onInit() {
				this.getData();
			}
		}, {
			key: 'editFav',


			/**
	   * Add or delete fav list
	   * @param id
	   * @param fav
	   */
			value: function editFav(id, fav) {
				this.API.one('recipe/switch_fav', id).customPUT({ 'fav': fav }).then(function (response) {});
			}

			/**
	   * Get all recipe
	   */

		}, {
			key: 'getData',
			value: function getData() {
				var _this = this;

				this.API.all('recipe').get('').then(function (response) {
					_this.list = response.data;
				});
			}

			/**
	   * View Ingredients shop list
	   */

		}, {
			key: 'getIngredientsFav',
			value: function getIngredientsFav() {
				var _this2 = this;

				this.API.all('ingredient/show_list_to_shop').get('').then(function (response) {
					if (!response.errors) {
						_this2.favIngredients = response.data;
						_this2.loadShopListModal(_this2.favIngredients);
					}
				});
			}

			/**
	   * Request to delete recipe
	   * @param id
	   */

		}, {
			key: 'delRecipe',
			value: function delRecipe(id) {
				var _this3 = this;

				this.API.one('recipe/delete', id).remove().then(function (response) {
					if (!response.errors) {
						_this3.getData();
					}
				});
			}

			/**
	   * Modal shop list view
	   * @param favIngredients
	   */

		}, {
			key: 'loadShopListModal',
			value: function loadShopListModal(favIngredients) {
				this.modal.open({
					templateUrl: './views/app/components/recipe/ingredient-modal.html',
					size: 'sm',
					controller: ["$uibModalInstance", function controller($uibModalInstance) {
						'ngInject';

						this.ok = function () {
							$uibModalInstance.close();
						};
						this.favIngredients = favIngredients;
					}],
					controllerAs: '$ctrl'
				});
			}

			/**
	   * Modal confirm delete Recipe
	   * @param recipe
	   */

		}, {
			key: 'delRecipeModal',
			value: function delRecipeModal(recipe) {
				var _this4 = this;

				this.modal.open({
					templateUrl: './views/app/components/recipe/confirm-delete-modal.html',
					size: 'sm',
					controller: ["$uibModalInstance", "deleteRecipe", function controller($uibModalInstance, deleteRecipe) {
						'ngInject';

						this.recipe = recipe;

						this.delete = function () {
							deleteRecipe(recipe.id);
							$uibModalInstance.close();
						};

						this.close = function () {
							$uibModalInstance.close();
						};
					}],
					controllerAs: '$ctrl',
					resolve: {
						deleteRecipe: function deleteRecipe() {
							return _this4.delRecipe.bind(_this4);
						}
					}

				});
			}
		}]);

		return RecipeController;
	}();

	var RecipeComponent = exports.RecipeComponent = {
		templateUrl: './views/app/components/recipe/recipe.component.html',
		controller: RecipeController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateRecipeFormController = exports.CreateRecipeFormController = function () {
		CreateRecipeFormController.$inject = ["API", "$injector"];
		function CreateRecipeFormController(API, $injector) {
			'ngInject';

			_classCallCheck(this, CreateRecipeFormController);

			this.API = API;
			this.state = $injector.get('$state');

			this.newIngredient = '';
			this.ingredients = [];
			this.recipe = [];
			this.searchIngredient = [];
			this.error = '';
		}

		_createClass(CreateRecipeFormController, [{
			key: '$onInit',
			value: function $onInit() {
				this.getAllIngredients();
			}
		}, {
			key: 'submitFormRecipe',


			/**
	   * Add new recipe
	   */
			value: function submitFormRecipe() {
				var _this = this;

				var data = {
					'name': this.recipe.name,
					'description': this.recipe.description,
					'ingredients': this.ingredients
				};

				this.API.all('recipe/store').post(data).then(function (response) {
					_this.state.go('app.recipe');

					_this.error = response;
					console.log(response);
					console.log(2);
					console.log(response.errors);
					if (response.status == 422) {
						console.log('хуцй');
					}
				});
			}

			/**
	   * Get all ingredients array
	   */

		}, {
			key: 'getAllIngredients',
			value: function getAllIngredients() {
				var _this2 = this;

				this.API.all('ingredient').get('').then(function (response) {
					if (!response.errors) {
						_this2.searchIngredient = response.data;
					}
				});
			}

			/**
	   * Add or check new ingredient
	   */

		}, {
			key: 'addIngredient',
			value: function addIngredient() {
				var _this3 = this;

				this.API.all('ingredient/create').post({ 'name': this.newIngredient }).then(function (response) {
					_this3.ingredients.push(response.data);
					_this3.getAllIngredients();
					_this3.newIngredient = '';
				});
			}

			/**
	   * Delete ingredients
	   * @param $index
	   */

		}, {
			key: 'delIngredient',
			value: function delIngredient($index) {
				this.ingredients.splice($index, 1);
			}
		}]);

		return CreateRecipeFormController;
	}();

	var CreateRecipeFormComponent = exports.CreateRecipeFormComponent = {
		templateUrl: './views/app/components/recipe-form/recipe-form.component.html',
		controller: CreateRecipeFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.EditRecipeFormComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createRecipeForm = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditRecipeFormController = function (_CreateRecipeFormCont) {
		EditRecipeFormController.$inject = ["API", "$injector"];
		_inherits(EditRecipeFormController, _CreateRecipeFormCont);

		function EditRecipeFormController(API, $injector) {
			'ngInject';

			_classCallCheck(this, EditRecipeFormController);

			var _this = _possibleConstructorReturn(this, (EditRecipeFormController.__proto__ || Object.getPrototypeOf(EditRecipeFormController)).call(this, API, $injector));

			_this.stateParams = $injector.get('$stateParams');

			return _this;
		}

		_createClass(EditRecipeFormController, [{
			key: '$onInit',
			value: function $onInit() {
				this.showRecipe();
				this.getAllIngredients();
			}
		}, {
			key: 'showRecipe',


			/**
	   * Show full info recipe
	   */
			value: function showRecipe() {
				var _this2 = this;

				this.API.all('recipe/show').get(this.stateParams.id).then(function (response) {
					_this2.recipe.name = response.data.name;
					_this2.recipe.description = response.data.description;
					_this2.ingredients = response.data.ingredients;
				});
			}

			/**
	   * Update recipe info
	   */

		}, {
			key: 'submitFormRecipe',
			value: function submitFormRecipe() {
				var _this3 = this;

				var data = {
					'name': this.recipe.name,
					'description': this.recipe.description,
					'ingredients': this.ingredients
				};

				this.API.one('recipe/update', this.stateParams.id).customPUT(data).then(function (response) {
					// if(!response.errors) {
					_this3.state.go('app.recipe');
					// }
				});
			}
		}]);

		return EditRecipeFormController;
	}(_createRecipeForm.CreateRecipeFormController);

	var EditRecipeFormComponent = exports.EditRecipeFormComponent = {
		templateUrl: './views/app/components/recipe-form/recipe-form.component.html',
		controller: EditRecipeFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _API = __webpack_require__(18);

	var _dialog = __webpack_require__(19);

	angular.module('app.services').service('API', _API.APIService).service('DialogService', _dialog.DialogService);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "$localStorage", function APIService(Restangular, $localStorage) {
		'ngInject';
		//content negotiation

		_classCallCheck(this, APIService);

		var headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/x.laravel.v1+json'
		};

		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/api/').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
				if (response.status === 422) {
					for (var error in response.data.errors) {
						// console.log(response.data.errors[error][0]);
					}
				}
			}).addFullRequestInterceptor(function (element, operation, what, url, headers) {
				if ($localStorage.jwt) {
					headers.Authorization = 'Bearer ' + $localStorage.jwt;
				}
			});
		});
	}];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DialogService = exports.DialogService = function () {
		DialogService.$inject = ["$mdDialog"];
		function DialogService($mdDialog) {
			'ngInject';

			_classCallCheck(this, DialogService);

			this.$mdDialog = $mdDialog;
		}

		_createClass(DialogService, [{
			key: 'fromTemplate',
			value: function fromTemplate(template, options) {
				if (!template) {
					return false;
				}

				if (!options) {
					options = {};
				}

				options.templateUrl = './views/dialogs/' + template + '/' + template + '.html';

				return this.$mdDialog.show(options);
			}
		}, {
			key: 'hide',
			value: function hide() {
				return this.$mdDialog.hide();
			}
		}, {
			key: 'alert',
			value: function alert(title, content) {
				this.$mdDialog.show(this.$mdDialog.alert().title(title).content(content).ok('Ok'));
			}
		}, {
			key: 'confirm',
			value: function confirm(title, content) {
				return this.$mdDialog.show(this.$mdDialog.confirm().title(title).content(content).ok('Ok').cancel('Cancel'));
			}
		}]);

		return DialogService;
	}();

/***/ })
/******/ ]);