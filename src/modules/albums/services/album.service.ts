import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateAlbumInput, UpdateAlbumInput } from 'src/graphql';
import { headerData } from 'src/data.model';

@Injectable()
export class AlbumService {

  public client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ALBUM_URL
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

  async create(
    CreateAlbumInput: CreateAlbumInput,
    header: headerData['config']
  ) {
    const res = await this.client.post('/', CreateAlbumInput, header);
    return res.data;
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

  async update(
    id: string,
    UpdateAlbumInput: UpdateAlbumInput,
    header: headerData['config']
  ) {
    const res = await this.client.put(`/${id}`, UpdateAlbumInput, header);
    return res.data;
  }

  async remove(id: string, header: headerData['config']) {
    const res = await this.client.delete(`/${id}`, header);
    return res.data;
  }
}
