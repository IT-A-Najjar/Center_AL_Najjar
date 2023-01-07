<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\TypeController;
use App\Models\Item;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;
use \App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {return view('welcome');});

Route::get('/about', function () {return view('about');});

Route::get('/shop', function () {
    return view('shop',[
        'products' => \App\Models\Products::orderBy('id','DESC')->get(),
    ]);
});



Route::get('/ViewMenShose', function () {
    return view('Products.ViewMenShose',[
        'products' => \App\Models\Products::all(),
    ]);
});
Route::get('/ViewMenBag', function () {
    return view('Products.ViewMenBag',[
        'products' => \App\Models\Products::all(),
    ]);
});
Route::get('/ViewFemenShose', function () {
    return view('Products.ViewFemenShose',[
        'products' => \App\Models\Products::all(),
    ]);
});
Route::get('/ViewFemenBag', function () {
    return view('Products.ViewFemenBag',[
        'products' => \App\Models\Products::all(),
    ]);
});
Route::get('/ViewFemenShal', function () {
    return view('Products.ViewFemenShal',[
        'products' => \App\Models\Products::all(),
    ]);
});

Auth::routes();

Route::get('/centeralnajjar/get/products/list',[ProductsController::class,'getProductsList']);

Route::get('/centeralnajjar/get/items/list',[ItemController::class,'getItemList']);

Route::get('/centeralnajjar/get/types/list',[TypeController::class,'getTypeList']);

Route::post('/centeralnajjar/get/individual/product/details',[ProductsController::class,'getProductDetails']);

Route::post('/centeralnajjar/update/product/data',[ProductsController::class,'updateProductData']);

Route::delete('/centeralnajjar/delete/product/data/{product}',[ProductsController::class,'destroy']);

Route::post('/centeralnajjar/store/product/data',[ProductsController::class,'store']);

/* ================================ */

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/employee/list',[EmployeesController::class,'getEmployeeList'])->name('employee.list');

Route::post('/get/individual/employee/details',[EmployeesController::class,'getEmployeeDetails'])->name('getEmployee.details');

Route::post('/update/employee/data',[EmployeesController::class,'updataEmployeeData']);

Route::delete('/delete/employee/data/{employee}',[EmployeesController::class,'destroy']);

Route::post('store/employee/data',[EmployeesController::class,'store']);
