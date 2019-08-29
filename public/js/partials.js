(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/recipe/confirm-delete-modal.html',
    '<div class="modal-header">\n' +
    '	<h3 class="modal-title" id="modal-title">Подтверждение:</h3>\n' +
    '</div>\n' +
    '<div class="modal-body" id="modal-body">\n' +
    '	<p>Вы действительно хотите удалить рецепт?</p>\n' +
    '	<b> {{ $ctrl.recipe.name}} </b>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '	<button class="btn btn-danger" type="button" ng-click="$ctrl.delete()">Удалить</button>\n' +
    '	<button class="btn btn-default" type="button" ng-click="$ctrl.close()">Отмена</button>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/recipe/ingredient-modal.html',
    '<div class="modal-header dialog-header-error">\n' +
    '	<h3 class="modal-title" id="modal-title">Список покупок:</h3>\n' +
    '</div>\n' +
    '<div class="modal-body" id="modal-body">\n' +
    '	<ul class="numeric">\n' +
    '		<li ng-repeat="ingredient in $ctrl.favIngredients track by $index">\n' +
    '			{{ ingredient.name }}\n' +
    '		</li>\n' +
    '	</ul>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '	<button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">Закрыть</button>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/recipe/recipe.component.html',
    '\n' +
    '<div class="row margin-bottom-15">\n' +
    '	<div class="col-sm-2">\n' +
    '		<a class="btn btn-primary" ui-sref="app.create_recipe">Добавить новый рецепт</a>\n' +
    '	</div>\n' +
    '	<div class="col-sm-3">\n' +
    '		<a class="btn btn-primary" ng-click="vm.getIngredientsFav()">Список Необходимых покупок</a>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<div class="row">\n' +
    '	<div class="col-sm-12">\n' +
    '		<form>\n' +
    '			<div class="form-group">\n' +
    '				<div class="row">\n' +
    '					<div class="col-sm-10">\n' +
    '						<input class="form-control" placeholder="Поиск по названию блюда" ng-model="search.name">\n' +
    '					</div>\n' +
    '					<div class="col-sm-2 text-right">\n' +
    '						<button type="button" class="btn btn-primary" ng-click="search.name = \'\'">Очистить форму</button>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</form>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row">\n' +
    '	<div class="col-sm-12">\n' +
    '		<table class="table table-hover table-bordered">\n' +
    '			<thead>\n' +
    '				<tr>\n' +
    '					<th width="5%">Избранное</th>\n' +
    '					<th width="65%">Название</th>\n' +
    '					<th width="30%" class="text-right">Действие</th>\n' +
    '				</tr>\n' +
    '			</thead>\n' +
    '			<tbody>\n' +
    '				<tr ng-repeat="recipe in vm.list | filter:search:name">\n' +
    '					<td>\n' +
    '						<input type="checkbox" ng-model="recipe.fav" ng-true-value="1" ng-false-value="0" ng-change="vm.editFav(recipe.id, recipe.fav)">\n' +
    '					</td>\n' +
    '					<td>\n' +
    '						<a ng-click="isCollapsed = !isCollapsed" class="link">{{ recipe.name }}</a>\n' +
    '						<div class="row">\n' +
    '							<div class="col-sm-12">\n' +
    '								<div uib-collapse="!isCollapsed">\n' +
    '									<hr>\n' +
    '									<p class="lead">Описание:</p>\n' +
    '									<p>{{ recipe.description }}</p>\n' +
    '									<hr>\n' +
    '									<p class="lead">Ингредиенты:</p>\n' +
    '									<ul class="numeric">\n' +
    '										<li ng-repeat="ingredient in recipe.ingredients">\n' +
    '											{{ ingredient.name }}\n' +
    '										</li>\n' +
    '									</ul>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '\n' +
    '					</td>\n' +
    '					<td class="text-right">\n' +
    '						<button type="button" class="btn btn-default" ng-click="isCollapsed = !isCollapsed">Подробнее</button>\n' +
    '						<a class="btn btn-primary" ui-sref="app.edit_recipe({ id: recipe.id })">Редактировать</a>\n' +
    '						<a class="btn btn-danger" ng-click="vm.delRecipeModal(recipe)">Удалить</a>\n' +
    '					</td>\n' +
    '\n' +
    '				</tr>\n' +
    '			</tbody>\n' +
    '		</table>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/recipe-form/recipe-form.component.html',
    '<div class="row">\n' +
    '	<div class="col-sm-12">\n' +
    '		<form ng-submit="vm.submitFormRecipe()">\n' +
    '\n' +
    '			<div class="form-group">\n' +
    '				<input type="text" ng-model="vm.recipe.name" class="form-control" placeholder="Название">\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '			<div class="form-group">\n' +
    '				<textarea ng-model="vm.recipe.description" class="form-control" rows="10" placeholder="Описание"></textarea>\n' +
    '			</div>\n' +
    '\n' +
    '			<h4>Ингредиенты:</h4>\n' +
    '\n' +
    '			<div class="form-group">\n' +
    '				<div class="row">\n' +
    '					<div class="col-sm-5">\n' +
    '						<input type="text" ng-model="vm.newIngredient" uib-typeahead="state for state in vm.searchIngredient | filter:$viewValue | limitTo:8" class="form-control" placeholder="Название продукта">\n' +
    '\n' +
    '					</div>\n' +
    '					<div class="col-sm-1">\n' +
    '						<a class="btn btn-primary pull-right" ng-click="vm.addIngredient()" uib-tooltip="Добавить продукт в список">+</a>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group">\n' +
    '				<div class="row">\n' +
    '					<div class="col-sm-6">\n' +
    '						<ul class="numeric">\n' +
    '							<li ng-repeat="ingredient in vm.ingredients track by $index" class="margin-bottom-15">\n' +
    '								{{ ingredient.name }}\n' +
    '								<a ng-click="vm.delIngredient($index)" uib-tooltip="Удалить продукт"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>\n' +
    '							</li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '			<button type="submit" class="btn btn-primary">Сохранить</button>\n' +
    '			<a ui-sref="app.recipe" class="btn btn-default">Отмена</a>\n' +
    '		</form>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<div class="custom-popup-wrapper"\n' +
    '	 ng-style="{top: position().top+\'px\', left: position().left+\'px\'}"\n' +
    '	 style="display: block;"\n' +
    '	 ng-show="isOpen() && !moveInProgress"\n' +
    '	 aria-hidden="{{!isOpen()}}">\n' +
    '\n' +
    '	<ul class="dropdown-menu" role="listbox">\n' +
    '		<li class="uib-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }"\n' +
    '			ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n' +
    '		</li>\n' +
    '	</ul>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create_recipe/create_recipe.page.html',
    '<div class="container">\n' +
    '	<div class="row">\n' +
    '		<div class="col-sm-12">\n' +
    '			<span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>\n' +
    '			<a ui-sref="app.recipe">Вернуться назад</a>\n' +
    '			<h3>Новый рецепт:</h3>\n' +
    '			<create-recipe-form-component></create-recipe-form-component>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/edit_recipe/edit_recipe.page.html',
    '<div class="container">\n' +
    '	<div class="row">\n' +
    '		<div class="col-sm-12">\n' +
    '			<span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>\n' +
    '			<a ui-sref="app.recipe">Вернуться назад</a>\n' +
    '			<h3>Редактирование рецепта:</h3>\n' +
    '			<edit-recipe-form-component></edit-recipe-form-component>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '<nav class="navbar">\n' +
    '	<div class="container">\n' +
    '		<h1>Книга рецептов</h1>\n' +
    '	</div>\n' +
    '</nav>');
}]);
})();

(function(module) {
try {
  module = angular.module('partialsModule');
} catch (e) {
  module = angular.module('partialsModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/recipe/recipe.page.html',
    '<div class="container">\n' +
    '	<recipe-component></recipe-component>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();
