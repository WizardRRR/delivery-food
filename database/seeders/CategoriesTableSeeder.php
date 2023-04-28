<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['nombre' => 'Carnes']);
        Category::create(['nombre' => 'Pescados y mariscos']);
        Category::create(['nombre' => 'Pastas']);
        Category::create(['nombre' => 'Ensaladas']);
        Category::create(['nombre' => 'Vegetarianos']);
    }
}
