<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bike extends Model
{
    use HasFactory;
        /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'user_id',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'marca',
        'modelo',
        'año',
        'tipo',
        'cilindrada',
        'potencia',
        'numMarchas',
        'peso',
        'precio',
        'kilometros',
        'descripcion',
        'user_id',
        'bike_image'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
