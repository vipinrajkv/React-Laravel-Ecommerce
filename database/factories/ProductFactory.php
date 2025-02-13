<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name' => fake()->word(1, true),
            'description' => fake()->paragraph(),
            'price' => fake()->numberBetween(100, 2000),
            'product_image' => fake()->image(public_path('images/products'),315,494, null, false),
        ];
    }
}
