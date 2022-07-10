import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class UserService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.USER_URL
    });

    this.client.interceptors.response.use((res) => {
      if (!res.data) {
        res.data = null;
        return res;
      }
      if (res.data.items) {
        res.data.items = res.data.items.map((el) => ({ ...el, id: el._id }));
      } else {
        res.data = { ...res.data, id: res.data._id };
      }
      return res;
    });
  }

  async login(email: string, password: string) {
    const res = await this.client.post('/login', { email, password });
    return res.data;
  }

  async getById(id: string) {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }

  async register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const res = await this.client.post('/register', {
      firstName,
      lastName,
      email,
      password
    });

    return res.data;
  }
}
