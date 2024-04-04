import { Schema, model } from "mongoose";

export const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "First name is required"],
    minLength: 2,
  },
  stock: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: [true, "First name is required"],
    minLength: 2,
  },

  category: {
    type: String,
    required: [true, "First name is required"],
    minLength: 2,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
export const Product = model("Product", productSchema);
