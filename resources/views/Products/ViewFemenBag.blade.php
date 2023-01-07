@extends('layouts.app')

@section('content')
    <!-- Start Featured Product -->
    <section class="bg-light">
        <div class="container py-5">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">الحقائب النسائية</h1>
                    <p>
                        منتجاتنا من افخم الماركاة المتواجدة
                    </p>
                </div>
            </div>
            <div class="row">
                @foreach($products as $product)
                    @if($product->item == 4 && $product->type == 3)
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <img src="ProductImages/{{$product->photo}}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <h2>{{$product->name}}</h2>
                                    <p class="card-text">
                                        Price: {{$product->price}} $
                                    </p>
                                </div>
                            </div>
                        </div>
                    @endif
                @endforeach
            </div>
        </div>
    </section>
    <!-- End Featured Product -->
@endsection
