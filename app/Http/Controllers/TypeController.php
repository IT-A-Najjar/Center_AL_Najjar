<?php

namespace App\Http\Controllers;

use App\Models\type;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TypeController extends Controller
{
    public function getTypeList(){
        try {
            $types = type::orderBy('id','DESC')->get();
            return response()->json($types);
        }catch (Exception $e){
            Log::error($e);
        }
    }
}
