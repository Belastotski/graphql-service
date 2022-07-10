import { Module } from '@nestjs/common';
import { ArtistService } from './services/artist.service';
import { ArtistResolver } from './resolvers/artist.resolver';
import { BandResolver } from '../bands/resolvers/band.resolver';
import { BandService } from '../bands/services/band.service';
import { GenreResolver } from '../genres/resolvers/genre.resolver';
import { GenreService } from '../genres/services/genre.service';

@Module({
  providers: [
    ArtistResolver,
    ArtistService,
    BandResolver,
    BandService,
    GenreResolver,
    GenreService
  ]
})
export class ArtistModule {}
