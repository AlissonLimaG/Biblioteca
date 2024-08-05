import { Injectable, BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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
    console.log('Cadastrado!')
    return { message: 'Cadastro realizado com sucesso!' }

  }



//   findAll() {
//     return this.userRepository.find();
//   }

//   async findOne(id: number) {
//     const user = await this.userRepository.findOneBy({ id });
//     if (!user) {
//       throw new BadRequestException('Usuário não encontrado')
//     }
//     return user;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
 }
