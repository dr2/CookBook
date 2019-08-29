<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/

Route::get('/', 'AngularController@serveApp');
Route::get('/unsupported-browser', 'AngularController@unsupported');
Route::get('/test', 'RecipeController@test');

/*
|--------------------------------------------------------------------------
| Api Routes
|--------------------------------------------------------------------------
*/

$api->group([], function ($api) {
    $api->get('recipe', 'RecipeController@index');
    $api->get('recipe/show/{id}', 'RecipeController@show');
    $api->post('recipe/store', 'RecipeController@store');
    $api->put('recipe/update/{id}', 'RecipeController@update');
    $api->put('recipe/switch_fav/{id}', 'RecipeController@switchFav');
	$api->delete('recipe/delete/{id}', 'RecipeController@delete');
	$api->get('ingredient', 'IngredientController@index');
	$api->post('ingredient/create', 'IngredientController@create');
	$api->get('ingredient/show_list_to_shop', 'IngredientController@showListToShop');
});