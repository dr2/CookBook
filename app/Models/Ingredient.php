<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
	protected $fillable = ['name'];

	public $timestamps = false;


	/**
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function recipes()
	{
		return $this->belongsToMany('App\Models\Recipe', 'ingredient_recipe');
	}

}
