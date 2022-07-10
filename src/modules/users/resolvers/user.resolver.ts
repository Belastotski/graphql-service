import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('jwt')
  async login(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    return this.userService.login(email, password);
  }

  @Query('user')
  async getById(@Args('id') id: string) {
    return this.userService.getById(id);
  }

  @Mutation()
  async register(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    return this.userService.register(firstName, lastName, email, password);
  }
}
