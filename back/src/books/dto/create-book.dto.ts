import { IsNotEmpty, IsString } from "class-validator";
export class CreateBookDto {
    @IsNotEmpty({ message: 'Preencha o campo de título' })
    titulo: string

    @IsNotEmpty({ message: 'Preencha o campo de autor(a)' })
    autor: string

    @IsNotEmpty({ message: 'Preencha o campo de editora' })
    editora: string

    @IsNotEmpty({ message: 'Preencha a descrição' })
    descricao: string
}
