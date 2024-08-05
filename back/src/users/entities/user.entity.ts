import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:255})
    nome:string;

    @Column({length:255, unique:true})
    email: string;

    @Column()
    senha: string
}
