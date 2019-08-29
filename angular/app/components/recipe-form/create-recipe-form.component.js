export class CreateRecipeFormController{
    constructor(API, $injector){
        'ngInject';

		this.API = API;
		this.state= $injector.get('$state');

		this.newIngredient = '';
		this.ingredients = [];
		this.recipe = [];
		this.searchIngredient = [];
		this.errors = false;
    }

	$onInit() {
    	this.getAllIngredients();
    };

	/**
	 * Add new recipe
	 */
	submitFormRecipe() {

		var data = {
			'name' : this.recipe.name,
			'description' : this.recipe.description,
			'ingredients' : this.ingredients
		};

		this.API.all('recipe/store').post(data).then((response) => {
			this.state.go('app.recipe');
		}).catch((error) => {
			this.errorProcess(error);
		});
	}

	/**
	 * Get all ingredients array
	 */
	getAllIngredients() {
		this.API.all('ingredient').get('').then((response) => {
			if(!response.errors) {
				this.searchIngredient = response.data;
			}
		});
	}

	/**
	 * Add or check new ingredient
	 */
	addIngredient() {
		this.API.all('ingredient/create').post({ 'name' : this.newIngredient}).then((response) => {
			this.ingredients.push(response.data);
			this.getAllIngredients();
			this.newIngredient = '';
		});
	}

	/**
	 * Delete ingredients
	 * @param $index
	 */
	delIngredient($index) {
		this.ingredients.splice($index, 1);
	}

	/**
	 * Errors handler
	 * @param error
	 */
	errorProcess(error){
		this.errors = error.data.errors.name;
		console.log(error.data.errors.name);
	}

}

export const CreateRecipeFormComponent = {
    templateUrl: './views/app/components/recipe-form/recipe-form.component.html',
    controller: CreateRecipeFormController,
    controllerAs: 'vm',
    bindings: {}
};