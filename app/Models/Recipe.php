<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
	protected $fillable = ['name', 'description', 'fav'];

	public $timestamps = false;


	/**
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function ingredients()
	{
		return $this->belongsToMany('App\Models\Ingredient', 'ingredient_recipe', 'recipe_id', 'ingredient_id');
	}

}
