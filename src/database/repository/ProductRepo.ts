import Products, { Product } from '../model/Product';


export default class ProductRepo {

  public static findAll(): Product[] {
    return Products.getAllProducts()
  }
  public static findById(id: number): Product | undefined {
    return Products.getProductById(id)
  }

}
