import { Product } from "../models/product.model.js";

export class ProductService {
  //1. Get all products
  static async getAllProducts() {
    const products = await Product.find({});

    return products;
  }
  // FILTRI
  
  // static async getAllStudents(filters) {
  //   console.log(filters);

  //   //students?sortBy=age&orderBy=asc&age=40

  //   const { sortBy, orderBy, firstResult, maxResults, ...basicFilters } =
  //     filters;

  //   const sortFilters = {};

  //   if (sortBy === "age") {
  //     if (orderBy === "asc") sortFilters.age = 1;
  //     if (orderBy === "desc") sortFilters.age = -1;
  //   }

  //   if (basicFilters.age) basicFilters.age = { $gte: Number(basicFilters.age) };

  //   const students = await Student.find(basicFilters)
  //     .sort(sortFilters)
  //     .limit(maxResults ? Number(maxResults) : 10)
  //     .skip(firstResult ? Number(firstResult) - 1 : 0);

  //   const count = await Student.countDocuments();

  //   return {
  //     students,
  //     totalRecords: count,
  //   };
  // }
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

  //5.Delete product
    static async deleteProduct(productId) {
    const response = await Product.findByIdAndDelete(productId);

    if (!response) throw new Error("Product not found");

    console.log(response);
  }

}
