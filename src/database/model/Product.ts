import * as fs from 'fs';
import * as path from 'path';


const PRODUCTS_FILE_PATH = path.join(__dirname, '../dummy_data/products.json');

export interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
}

class ProductModel {
  private products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    if (fs.existsSync(PRODUCTS_FILE_PATH)) {
      const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
      this.products = JSON.parse(data);
    } else {
      this.products = [];
    }
  }


  getAllProducts(): Product[] {
    return this.products
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}

export default new ProductModel();
