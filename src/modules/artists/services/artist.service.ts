import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { headerData } from 'src/data.model';

@Injectable()
export class ArtistsService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.ARTIST_URL
    });

    this.instance.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item: { _id: any }) => ({
        ...item,
        id: item._id
      }));
      return res;
    });
  }

  async create(
    firstName: string,
    secondName: string,
    middleName: string,
    birthDate: string,
    birthPlace: string,
    country: string,
    bands: string[],
    instruments: string[],
    config: headerData['config']
  ) {
    const res = await this.instance.post(
      '/',
      {
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bands,
        instruments
      },
      config
    );

    return res.data;
  }

  async findAll(limit: number, offset: number) {
    const res = await this.instance.get('/', {
      params: { limit, offset }
    });

    return res.data.items;
  }

  async findOne(id: string) {
    const res = await this.instance.get('/' + id);
    return res.data;
  }

  async update(
    id: string,
    firstName: string,
    secondName: string,
    middleName: string,
    birthDate: string,
    birthPlace: string,
    country: string,
    bands: string[],
    instruments: string[],
    config: headerData['config']
  ) {
    const res = await this.instance.put(
      '/' + id,
      {
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bands,
        instruments
      },
      config
    );

    return res.data;
  }

  async remove(id: string, config: headerData['config']) {
    const res = await this.instance.delete('/' + id, config);
    return res.data;
  }
}

