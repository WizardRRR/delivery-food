<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plato extends Model
{
    // relacion de muchos a uno
    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
    // relacion de muchos a muchos
    public function pedidos()
    {
        return $this->belongsToMany(Pedido::class)->withPivot('cantidad');
    }

    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'category_id',
        'disponibilidad',
    ];

}
