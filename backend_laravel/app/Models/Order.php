<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    protected $table = 'orders';

    protected $fillable = [
        'title',
        'details',
        'location',
        'telephone',
        'accepted'
    ];

    use HasFactory;
}
