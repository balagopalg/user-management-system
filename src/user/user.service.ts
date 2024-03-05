import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { fetchQueryResults } from 'utils/typeorm/typeorm-helpers';
import {
  dataSource,
  initialiseDbConnections,
} from 'utils/typeorm/typeorm-handler';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}
  async createUser(createUserInput: CreateUserInput) {
    try {
      await initialiseDbConnections();
      const { name, email } = createUserInput;
      const status = 'Active';
      const timestamp = Date.now();
      const checkUser = await fetchQueryResults(
        'users',
        ['name'],
        'email',
        email,
      );
      if (!checkUser || !checkUser.length) {
        const dataMappingForDb = {
          name,
          email,
          status,
          is_active: true,
          is_admin: false,
          created_on: timestamp,
          last_updated: timestamp,
          created_by: 1,
        };
        await dataSource
          .createQueryBuilder()
          .insert()
          .into('users')
          .values([dataMappingForDb])
          .execute();
        return 'User has been added successfully';
      }
      return 'User already exists';
    } catch (err) {
      console.error('Error creating User', err);
      throw err;
    }
  }

  async getAllUser() {
    await initialiseDbConnections();
    const users = await fetchQueryResults('users', [], '', '');
    return users;
  }

  async getUser(getUserInput) {
    try {
      const { id } = getUserInput;
      let users: string[] = await this.cacheService.get(id.toString());
      if (!users) {
        await initialiseDbConnections();
        if (!id || isNaN(Number(id))) return 'Invalid User id provided';
        users = await fetchQueryResults(
          'users',
          ['name', 'id', 'status'],
          'id',
          id,
        );
        if (!users || !users.length) return [];
        else {
          await this.cacheService.set(id.toString(), users);
        }
      }
      return users;
    } catch (err) {
      console.error('Error getting data', err);
      throw err;
    }
  }
}
