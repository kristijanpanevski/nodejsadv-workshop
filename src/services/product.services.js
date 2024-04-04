import { Product } from "../models/product.model.js";

export class ProductService {
  //1. Get all products
  static async getAllProducts() {
    const products = await Product.find({});

    return products;
  }

  //2. Create a product
  static async createProduct(productData) {
    const createdProduct = Product.create(productData);

    return createdProduct;
  }
  //3. Get a product by id
  static async getProductById(productId) {
    const foundProduct = await Product.findById(productId);

    if (!foundProduct) throw new Error("Product Not Found");

    return foundProduct;
  }
  //4. Update product info
  static async updateProduct(productId, updateData) {
    const foundProduct = await this.getProductById(productId);

    Object.assign(foundProduct, updateData);

    const updatedProduct = await foundProduct.save();

    return updatedProduct;
  }
}
