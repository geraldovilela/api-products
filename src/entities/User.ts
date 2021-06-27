import {v4 as uuid} from 'uuid';
import { model } from "mongoose";
import mongoose from "../database/index";
import { IProduct } from './Product';

interface IUser {
  user_id:string;

  name:string;

  email:string;

  password:string;

  admin:boolean;

  avatar?:string;

  favored: IProduct[]
}

const schema = new mongoose.Schema<IUser>({
  user_id:{type:String, required:true, default:uuid()},
  name: {type:String, required:true},
  email: { type: String, required: true, unique:true, lowercase:true },
  password:{type: String, required:true, select:false},
  avatar: String,
  admin: {type:Boolean, default:false},
  favored:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product"
    }
  ]
})

const User = model<IUser>('User', schema);

export { User, IUser };