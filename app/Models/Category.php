<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    // relacion de uno a muchos
    public function platos()
    {
        return $this->hasMany(Plato::class);
    }
    protected $fillable = [
        'nombre',
    ];

}
