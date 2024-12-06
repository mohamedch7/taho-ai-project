import asyncHandler from "../../helpers/asyncHandler";
import { NotFoundResponse, SuccessResponse } from "../../core/ApiResponse";
import ProductRepo from "../../database/repository/ProductRepo";



export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await ProductRepo.findAll();

  if (!products || products.length === 0) {
    return new NotFoundResponse('Products not found').send(res);
  }

  new SuccessResponse('All products returned successfuly', {
    products
  }).send(res);

});

export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!/^\d+$/.test(id)) {
    return new NotFoundResponse('Invalid product id').
      send
      (res);
  }

  const product = await ProductRepo.findById(parseInt(id));

  if (!product) {
    return new NotFoundResponse('Product not found').send(res);
  }

  new SuccessResponse('Product returned successfuly', {
    product
  }).send(res);

});
