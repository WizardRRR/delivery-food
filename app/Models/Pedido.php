<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    // relacion muchos a uno
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
    // relacion de muchos a muchos
    public function platos()
    {
        return $this->belongsToMany(Plato::class)->withPivot('cantidad');
    }

    use HasFactory;
    protected $fillable = [
        'fecha',
        'estado',
        'total',
        'id_user',
        'direccion',
    ];

}
