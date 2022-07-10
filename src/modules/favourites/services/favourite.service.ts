import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { headerData } from 'src/data.model';

@Injectable()
export class FavouriteService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FAVORITE_URL
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

  async findAll(config: headerData['config']) {
    const res = await this.client.get('/', config);
    return res.data;
  }

  async add(type: string, id: string, config: headerData['config']) {
    const res = await this.client.put('/add', { type, id }, config);
    return res.data;
  }

  async remove(type: string, id: string, config: headerData['config']) {
    const res = await this.client.put('/remove', { type, id }, config);
    return res.data;
  }
}
