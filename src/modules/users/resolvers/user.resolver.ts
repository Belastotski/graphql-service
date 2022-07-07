import { UserService } from '../services/user.service';

export class ArtistResolver {
  constructor(private userService: UserService) {}

  async user(id: string) {
    return this.userService.getUserById(id);
  }
  async jwt() {
    return this.userService.JWT();
  }
}
