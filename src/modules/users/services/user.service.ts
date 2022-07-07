import axios, { AxiosInstance } from 'axios';

export class UserService {
  async JWT() {
    return await this.client.get('');
  }
  async getUserById(id: string) {
    return await this.client.get(id);
  }

  async registerUser() {
    return await this.client.post('registr');
  }

  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.USER_URL
    });
  }
}
