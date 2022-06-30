import { AlbumService } from '../services/album.service';

export class AlbumResolver {
  async album(id: string) {
    return AlbumService.findById(id);
  }
  async albums() {
    return AlbumService.findAll();
  }
}
