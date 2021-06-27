import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, ObjectID, ObjectIdColumn } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
class FavoretiProducts {
  @ObjectIdColumn()
  _id:ObjectID;
  @Column()
  id:string;
  
  @Column()
  user_id: string;

  @JoinColumn({name:"user_id"})
  @ManyToMany(()=>User)
  userProfile:User;

  @Column()
  product_id:string;

  @JoinColumn({name:"product_id"})
  @ManyToMany(()=> Product)
  productProfile: Product;


}

export { FavoretiProducts };