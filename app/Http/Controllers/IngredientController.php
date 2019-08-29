<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Models\Ingredient;

class IngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		$content = Ingredient::all()->pluck('name')->toArray();
		return response()->success($content);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
		$name = $request->input('name');

		$ingredient = Ingredient::firstOrNew(['name' => $name]);
		$ingredient->save();

		return response()->success($ingredient->toArray());
    }

	/**
	 * Display a grouped listing of the resource.
	 * @return \Illuminate\Http\Response
	 */
	public function showListToShop() {

		$ingredients = Ingredient::whereHas('recipes', function ($query) {
			$query->where('fav', '=', '1');
		})->groupBy('id')->get();
		return response()->success($ingredients->toArray());
	}
}
