import { Module } from '@nestjs/common';
import { FavouriteService } from './services/favourite.service';
import { FavouriteResolver } from './resolvers/favourite.resolver';
import { BandService } from '../bands/services/band.service';
import { GenreService } from '../genres/services/genre.service';
import { ArtistService } from '../artists/services/artist.service';
import { TrackService } from '../tracks/services/track.service';

@Module({
  providers: [
    FavouriteResolver,
    FavouriteService,
    ArtistService,
    BandService,
    GenreService,
    TrackService
  ]
})
export class FavouriteModule {}
