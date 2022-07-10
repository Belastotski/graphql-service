import { UserService } from '../services/user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    login(email: string, password: string): Promise<any>;
    getById(id: string): Promise<any>;
    register(firstName: string, lastName: string, email: string, password: string): Promise<any>;
}
