import { model } from "mongoose";
import mongoose from "../database/index";

interface IProduct {
  name: string;

  description: string;

  price: number;

  manufacturer: string;
}

const schema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  manufacturer: { type: String, required: true, lowercase: true },
})

const Product = model<IProduct>('Product', schema)

export { Product, IProduct };