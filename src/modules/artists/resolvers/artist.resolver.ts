import { ArtistService } from '../services/artist.service';

export class ArtistResolver {
  constructor(private artistService: ArtistService) {}

  async artist(id: string) {
    return this.artistService.findById(id);
  }
  async artists() {
    return this.artistService.findAll();
  }
}
