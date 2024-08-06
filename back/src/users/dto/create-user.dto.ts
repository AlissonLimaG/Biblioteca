import { IsNotEmpty, IsString, IsStrongPassword} from "class-validator";
export class CreateUserDto {

    @IsString()
    @IsNotEmpty({message:'Preencha o campo de nome'})
    nome: string;

    @IsString()
    @IsNotEmpty({message:' Preencha o campo de email'})
    email: string;

    @IsString()
    @IsStrongPassword({ minLength: 8, minLowercase: 1, minNumbers: 1, minUppercase: 1, minSymbols:0 },{message:' Senha fraca ou insuficiente!'})
    senha: string;

}

export class LoginUserDto{
    @IsString()
    @IsNotEmpty({message:'Preencha o campo de email'})
    email: string;

    @IsString()
    @IsNotEmpty({message:' Preencha o campo de senha'})
    senha: string;
}
