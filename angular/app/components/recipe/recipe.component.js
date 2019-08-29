class RecipeController{
    constructor(API, $injector){
        'ngInject';

		this.API = API;
		this.list = [];
		this.favIngredients = [];
		this.modal = $injector.get('$uibModal');
    }


	$onInit() {
        this.getData();
    };

	/**
	 * Add or delete fav list
	 * @param id
	 * @param fav
	 */
    editFav(id, fav){
		this.API.one('recipe/switch_fav', id).customPUT({'fav' : fav}).then((response) => {
		});
	}

	/**
	 * Get all recipe
	 */
	getData() {
		this.API.all('recipe').get('').then((response) => {
			this.list = response.data;
		});
	}

	/**
	 * View Ingredients shop list
	 */
	getIngredientsFav() {
		this.API.all('ingredient/show_list_to_shop').get('').then((response) => {
			if(!response.errors) {
				this.favIngredients = response.data;
				this.loadShopListModal(this.favIngredients);
			}
		});
	}

	/**
	 * Request to delete recipe
	 * @param id
	 */
	delRecipe(id) {
		this.API.one('recipe/delete', id).remove().then((response) => {
			if(!response.errors) {
				this.getData();
			}
		});
	}

	/**
	 * Modal shop list view
	 * @param favIngredients
	 */
	loadShopListModal(favIngredients) {
		this.modal.open({
			templateUrl: './views/app/components/recipe/ingredient-modal.html',
			size: 'sm',
			controller: function ($uibModalInstance) {
				'ngInject';
				this.ok = function () {
					$uibModalInstance.close();
				};
				this.favIngredients = favIngredients;

			},
			controllerAs: '$ctrl',
		});
	}

	/**
	 * Modal confirm delete Recipe
	 * @param recipe
	 */
	delRecipeModal(recipe) {
		this.modal.open({
			templateUrl: './views/app/components/recipe/confirm-delete-modal.html',
			size: 'sm',
			controller: function ($uibModalInstance, deleteRecipe) {
				'ngInject';

				this.recipe = recipe;

				this.delete = function () {
					deleteRecipe(recipe.id);
					$uibModalInstance.close();
				};

				this.close = function () {
					$uibModalInstance.close();
				};
			},
			controllerAs: '$ctrl',
			resolve: {
				deleteRecipe: () => {
					return this.delRecipe.bind(this);
				}
			}

		});
	}
}

export const RecipeComponent = {
    templateUrl: './views/app/components/recipe/recipe.component.html',
    controller: RecipeController,
    controllerAs: 'vm',
    bindings: {}
};


