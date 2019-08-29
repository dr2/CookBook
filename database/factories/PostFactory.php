<?php

$factory->define(App\Models\Post::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'desc' => $faker->text,
    ];
});
