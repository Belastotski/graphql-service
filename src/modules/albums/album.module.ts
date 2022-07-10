import { Module } from '@nestjs/common';
import { ArtistResolver } from '../artists/resolvers/artist.resolver';
import { ArtistService } from '../artists/services/artist.service';
import { AlbumService } from './services/album.service';
import { AlbumResolver } from './resolvers/album.resolver';
import { BandResolver } from '../bands/resolvers/band.resolver';
import { BandService } from '../bands/services/band.service';
import { GenreResolver } from '../genres/resolvers/genre.resolver';
import { GenreService } from '../genres/services/genre.service';
import { TrackResolver } from '../tracks/resolvers/track.resolver';
import { TrackService } from '../tracks/services/track.service';

@Module({
  providers: [
    AlbumResolver,
    AlbumService,
    ArtistResolver,
    ArtistService,
    BandResolver,
    BandService,
    GenreResolver,
    GenreService,
    TrackService,
    TrackResolver,
  ]
})
export class AlbumModule {}
