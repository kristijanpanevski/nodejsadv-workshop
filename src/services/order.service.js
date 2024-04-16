import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

export class OrderService {
  //1. Get all Orders
  static async getAllOrders() {
    const orders = await Order.find({});

    return orders;
  }
  //2. Get order by id
  static async getOrderById(orderId) {
    // Populate takes a property and if it finds a reference to another collection it fetches the data and populates the documents
    const foundOrder = await Order.findById(orderId).populate({
      path: "products",
      model: Product,
    });

    if (!foundOrder) throw new Error("Order Not Found");

    return foundOrder;
  }
  //3. Create Order
  static async createOrder(orderData) {
    const newOrder = new Order(orderData);

    const createdOrder = await newOrder.save();

    return createdOrder;
  }
}
