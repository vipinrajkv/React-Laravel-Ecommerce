<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        protected readonly Product $product
    )
    {

    }

    public function getProductList()
    {
        return $this->product->select('*')
        ->without('created_at', 'updated_at')
        ->get();
    }
    
    public function getProduct(int $id)
    {
        return $this->product->where('id', $id)->first();
    }

}
