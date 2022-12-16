<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class type extends Model
{
    use HasFactory;
    protected $fillable=['name_type'];
    public function products(){
        return $this->hasMany(Product::class);
    }
}
