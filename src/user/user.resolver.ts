import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUser, User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { GetUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => CreateUser)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const message = await this.userService.createUser(createUserInput);
    return { message };
  }

  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.userService.getAllUser();
  }

  @Query(() => [User], { name: 'getUser' })
  async getUser(@Args('GetUserInput') getUserInput: GetUserInput) {
    const users = await this.userService.getUser(getUserInput);
    return users;
  }
}
