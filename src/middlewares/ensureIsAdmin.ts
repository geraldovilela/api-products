import { Request, Response, NextFunction } from 'express';
import {User, IUser} from "../entities/User";

export async function ensureIsAdmin(req: Request, res: Response, next: NextFunction) {
  const { user_id } = req;
  
  const {admin} = await User.findOne({user_id:user_id});
  
  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: "User is not authorized to perform this action."
  })

};