import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
class User {
  
  @ObjectIdColumn()
  id: ObjectID;
  
  @Column()
  name!: string;
  
  @Column()
  email!: string;
  
  @Column({select: false})
  password!: string;
  
  @Column()
  admin!:boolean;  
  
  @CreateDateColumn()
  created_at!: Date;
  
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at!: Date;
  
  @Column(type => Product)
  products: Product[];

}

export { User };