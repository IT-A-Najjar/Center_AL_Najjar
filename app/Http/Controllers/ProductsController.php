<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Exception;
use http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductsController extends Controller
{
    public function getProductsList(){
        try {
            $products = Products::orderBy('id','DESC')->get();
//            return response()->json($employees);
            return response()->json($products);
        }catch (Exception $e){
            Log::error($e);
        }
    }
    public function getProductDetails(Request $request){
        try {
            $product = Products::findOrFail($request->get('productId'));
            return response()->json($product);
        }catch (Exception $e){
            Log::error($e);
        }
    }
    public function updateProductData(Request $request){
        try {
            $productId=$request->get('productId');
            $productName=$request->get('productName');
            $productPrice=$request->get('productPrice');
            Products::where('id',$productId)->update([
                'name' => $productName,
                'price' => $productPrice,
            ]);
            return response()->json([
                'name' => $productName,
                'price' => $productPrice,
            ]);
        }catch (Exception $e){
            Log::error($e);
        }
    }
    public function destroy(Request $request){
        try
        {
            $product=Products::find('id',$request->get('productId'));
            $product->delete();
            return response()->json($product);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
    public function store(Request $request){

        try {
            $image=$request->file('productPhoto')->getClientOriginalName();
            $path=$request->file('productPhoto')->storeAs('p_img',$image,'aa');
            $product=new Products();
            $product->name=$request->get('productName');
            $product->price = $request->get('productPrice');
            $product->photo = $path ;
            $product->save();

            return response()->json([$product]);


        }catch(Exception $e){
            Log::error($e);
        }
    }
}
