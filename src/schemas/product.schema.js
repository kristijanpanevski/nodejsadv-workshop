import joi from "joi";

export const productSchema = joi.object({
  title: joi.string().min(2).required(),
  stock: joi.number().required(),
  description: joi.string().min(2).required(),
  category: joi.string().min(2).required(),
  price: joi.number().required(),
  rating: joi.number().required(),
});

export const updateProductSchema = joi.object({
  title: joi.string().min(2),
  stock: joi.number(),
  description: joi.string().min(2),
  category: joi.string().min(2),
  price: joi.number(),
  rating: joi.number(),
});
