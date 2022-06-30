import { AlbumService } from '../services/album.service';

export class AlbumResolver {
  constructor(private albumService: AlbumService) {}

  async album(id: string) {
    return this.albumService.findById(id);
  }
  async albums() {
    return this.albumService.findAll();
  }
}
