import { AxiosInstance } from 'axios';
export declare class UserService {
    client: AxiosInstance;
    constructor();
    login(email: string, password: string): Promise<any>;
    getById(id: string): Promise<any>;
    register(firstName: string, lastName: string, email: string, password: string): Promise<any>;
}
