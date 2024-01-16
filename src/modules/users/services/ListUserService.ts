import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/entities/repositories/UsersRepoditory';
import User from '../typeorm/entities/users';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUserService;
