<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RecipeRequest;

use App\Http\Requests;

use App\Models\Recipe;
use App\Models\Ingredient;

class RecipeController extends Controller
{
	public function test(){
			$content = Ingredient::all()->pluck('name', 'id')->toArray();
			return response()->success($content);

	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$recipe = Recipe::with('ingredients')->get();
		return response()->success($recipe->toArray());
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  RecipeRequest $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(RecipeRequest $request)
	{
		$ingredients = [];
		foreach ($request->input('ingredients') as $item) {
			$ingredients[] = $item['id'];
		}

		$recipe = Recipe::create($request->all());
		$recipe->ingredients()->sync($ingredients);
		$recipe->save();

		return response()->success($recipe);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		$data = Recipe::with('ingredients')->find($id)->toArray();
		return response()->success($data);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  RecipeRequest $request
	 * @param  int $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(RecipeRequest $request, $id)
	{
		var_dump($request->all());exit;
		$ingredients = [];
		foreach ($request->input('ingredients') as $item) {
			$ingredients[] = $item['id'];
		}

		$recipe = Recipe::find($id);
		$recipe->fill($request->all());
		$recipe->ingredients()->sync($ingredients);
		$recipe->save();

		return response()->success($recipe);
	}

	/**
	 * Remove the specified resource from storage.
	 * @param Request $request
	 * @return mixed
	 */
	public function delete(Request $request)
	{
		$recipe = Recipe::find($request->input('id'));
		$recipe->ingredients()->sync([]);

		return response()->success($recipe->delete());
	}

	/**
	 * Switch fav list recipe
	 * @param Request $request
	 * @param $id
	 * @return mixed
	 */
	public function switchFav(Request $request, $id)
	{
		$recipe = Recipe::find($id);
		$recipe->fill($request->all());
		$recipe->save();
		return response()->success($recipe);
	}

}
