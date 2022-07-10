import { Module } from '@nestjs/common';
import { AlbumResolver } from '../albums/resolvers/album.resolver';
import { AlbumService } from '../albums/services/album.service';
import { ArtistService } from '../artists/services/artist.service';
import { ArtistResolver } from '../artists/resolvers/artist.resolver';
import { BandResolver } from '../bands/resolvers/band.resolver';
import { BandService } from '../bands/services/band.service';
import { GenreResolver } from '../genres/resolvers/genre.resolver';
import { GenreService } from '../genres/services/genre.service';
import { TrackService } from './services/track.service';
import { TrackResolver } from './resolvers/track.resolver';

@Module({
  providers: [
    TrackResolver,
    TrackService,
    ArtistResolver,
    ArtistService,
    BandResolver,
    BandService,
    GenreResolver,
    GenreService,
    AlbumResolver,
    AlbumService
  ]
})
export class TrackModule {}
