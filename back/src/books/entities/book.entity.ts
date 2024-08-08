import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    codigo: Number;

    @Column()
    titulo: string;

    @Column()
    autor: string

    @Column()
    descricao: string

    @Column({unique:true,nullable:true})
    livro: string

    @Column({unique:true,nullable:true})
    capa: string
}
