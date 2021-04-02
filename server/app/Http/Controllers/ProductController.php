<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
public function index() {
    $prod = Product::get();
    return response($prod, 200);
}
}
