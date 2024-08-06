import { Injectable, BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateUserDto,LoginUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  // CRIANDO NOVO USUÁRIO
  async create(createUserDto: CreateUserDto) {
    // Checa se o email já está cadastrado e manda uma mensagem de erro caso esteja.
    if (await this.userRepository.findOneBy({ email: createUserDto.email })) {
      throw new ConflictException('Email já cadastrado')
    }
    //Salva o novo usuário caso o email não exista no banco
    this.userRepository.save(createUserDto);

    //retorna uma mensagem de sucesso
    return { message: 'Cadastro realizado com sucesso!' }

  }
  
  async login(userLogin: LoginUserDto) {
    const user = await this.userRepository.findOneBy({ email: userLogin.email, senha: userLogin.senha })

    if (user) {
      if (user.email === 'adm@gmail.com' && user.senha === 'Adm@123') {
        return { message: 'adm' }
      }
      else {
        return { message: 'user' }
      }
    }

    return { message: 'erro' }
  }
}