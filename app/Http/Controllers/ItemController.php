<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ItemController extends Controller
{
    public function getItemList(){
        try {
            $items = Item::orderBy('id','DESC')->get();
            return response()->json($items);
        }catch (Exception $e){
            Log::error($e);
        }
    }
}
