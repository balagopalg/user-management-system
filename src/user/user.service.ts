import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { fetchQueryResults } from 'utils/typeorm/typeorm-helpers';
import { initialiseDbConnections } from 'utils/typeorm/typeorm-handler';

@Injectable()
export class UserService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  async getAllUser() {
    await initialiseDbConnections();
    const users = await fetchQueryResults('users', [], '', '');
    return users;
  }

  async getUser(getUserInput) {
    await initialiseDbConnections();
    const { id } = getUserInput;
    if (!id || isNaN(Number(id))) return 'Invalid User id provided';
    const users = await fetchQueryResults('users', ['name'], 'id', id);
    if (!users || !users.length) return 'user not found';
    return users;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
