import axios, { AxiosInstance } from 'axios';

export class AlbumService {
  async findAll() {
    return await this.client.get('');
  }
  async findById(id: string) {
    return await this.client.get(id);
  }

  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ALBUMS_URL
    });
  }
}
