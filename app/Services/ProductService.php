<?php

namespace App\Services;
use App\Repositories\ProductRepository;
use App\Classes\ApiResponseClass;
use App\Http\Resources\ProductResource;

final class ProductService
{
   
    /**
     * Create a new Product Service instance.
     */
    public function __construct(
        protected readonly ProductRepository $productRepository,
        protected readonly ApiResponseClass $apiResponse,
    )
    {
        //
    }

    public function getProducts()
    {
        $product = $this->productRepository->getProductList();

        if ($product->isEmpty()) {
            return $this->apiResponse->sendError('No records found');
        }

        return $this->apiResponse->sendResponse(ProductResource::collection($product), 'Products retrieved successfully.');
    }

    public function getProduct(int $id)
    {
        $product = $this->productRepository->getProduct($id);

        if (!$product) {
            return $this->apiResponse->sendError('No records found');
        }
        
        return $this->apiResponse->sendResponse(new ProductResource ($product), 'Product retrieved successfully.');
    }
}
