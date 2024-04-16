import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  numberOfClasses: {
    type: Number,
    required: true,
    min: 3,
  },
  trainer: {
    type: String,
    required: true,
    minLength: 3,
  },
  assisstant: {
    type: String,
    required: true,
    minLength: 3,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      //   ref needs to point to the model name we used when creating student model
      ref: "Student",
    },
  ],
});

export const Order = model("Order", orderSchema);
