import {CreateRecipeFormController} from './create-recipe-form.component'

class EditRecipeFormController extends CreateRecipeFormController{
	constructor(API, $injector){
		'ngInject';

		super(API, $injector);

		this.stateParams = $injector.get('$stateParams');

	}

	$onInit() {
		this.showRecipe();
		this.getAllIngredients();
	};

	/**
	 * Show full info recipe
	 */
	showRecipe() {
		this.API.all('recipe/show').get(this.stateParams.id).then((response) => {
			this.recipe.name = response.data.name;
			this.recipe.description = response.data.description;
			this.ingredients = response.data.ingredients;
		});

	}

	/**
	 * Update recipe info
	 */
	submitFormRecipe() {

		var data = {
			'name' : this.recipe.name,
			'description' : this.recipe.description,
			'ingredients' : this.ingredients
		};

		this.API.one('recipe/update', this.stateParams.id).customPUT(data).then((response) => {
				this.state.go('app.recipe');
		}).catch((error) => {
			this.errorProcess(error);
		});
	}


}

export const EditRecipeFormComponent = {
	templateUrl: './views/app/components/recipe-form/recipe-form.component.html',
	controller: EditRecipeFormController,
	controllerAs: 'vm',
	bindings: {}
};