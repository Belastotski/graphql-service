import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateBandInput, UpdateBandInput } from 'src/graphql';
import { headerData } from 'src/data.model';

@Injectable()
export class BandService {
  
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.BAND_URL
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
  async findAll(limit: number, offset: number) {
    const res = await this.client.get('/', {
      params: { limit, offset }
    });
    return res.data.items;
  }

  async findOne(id: string) {
    if (!id) return null;
    const res = await this.client.get(`/${id}`);
    return res.data;
  }

  async create(createBandInput: CreateBandInput, header: headerData['config']) {
    const res = await this.client.post('/', createBandInput, header);
    return res.data;
  }

  async update(
    id: string,
    updateBandInput: UpdateBandInput,
    header: headerData['config']
  ) {
    const res = await this.client.put(`/${id}`, updateBandInput, header);
    return res.data;
  }

  async remove(id: string, header: headerData['config']) {
    const res = await this.client.delete(`/${id}`, header);
    return res.data;
  }
}
