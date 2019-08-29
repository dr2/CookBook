import {RecipeComponent} from './app/components/recipe/recipe.component';
import {CreateRecipeFormComponent} from './app/components/recipe-form/create-recipe-form.component';
import {EditRecipeFormComponent} from './app/components/recipe-form/edit-recipe-form.component';

angular.module('app.components')
	.component('recipeComponent', RecipeComponent)
	.component('createRecipeFormComponent', CreateRecipeFormComponent)
	.component('editRecipeFormComponent', EditRecipeFormComponent);
