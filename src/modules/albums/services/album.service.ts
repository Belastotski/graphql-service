import axios, { AxiosInstance } from 'axios';

export class AlbumService {
  static findAll() {
      throw new Error('Method not implemented.');
  }
  static findById(id: string) {
      throw new Error("Method not implemented.");
  }

  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ALBUMS_URL
    });
  }


}
