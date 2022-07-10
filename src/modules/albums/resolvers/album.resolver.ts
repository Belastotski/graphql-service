import {
  Resolver,
  ResolveField,
  Parent,
  Args,
  Query,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { Album, CreateAlbumInput, UpdateAlbumInput } from 'src/graphql';
import { AlbumService } from '../services/album.service';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { TrackService } from 'src/modules/tracks/services/track.service';
import { headerData } from 'src/data.model';

@Resolver('Album')
export class AlbumResolver {
  constructor(
    private readonly albumService: AlbumService,
    private readonly trackService: TrackService,
    private readonly artistService: ArtistService,
    private readonly bandService: BandService,
    private readonly genreService: GenreService
  ) {}
  @Query('albums')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number
  ) {
    return this.albumService.findAll(limit, offset);
  }

  @Query('album')
  findOne(@Args('id') id: string) {
    return this.albumService.findOne(id);
  }
  @Resolver()
  @ResolveField()
  async artists(@Parent() album: Album & { artistsIds: string[] }) {
    const { artistsIds } = album;
    return artistsIds.map((artistId) => this.artistService.findOne(artistId));
  }
  @Resolver()
  @ResolveField()
  async bands(@Parent() album: Album & { bandsIds: string[] }) {
    const { bandsIds } = album;
    return bandsIds.map((bandId: any) => this.bandService.findOne(bandId));
  }
  @Resolver()
  @ResolveField()
  async genres(@Parent() album: Album & { genresIds: string[] }) {
    const { genresIds } = album;
    return genresIds.map((genreId: any) => this.genreService.findOne(genreId));
  }
  @Resolver()
  @ResolveField()
  async tracks(@Parent() album: Album & { trackIds: string[] }) {
    const { trackIds } = album;
    return trackIds.map((trackId) => this.trackService.findOne(trackId));
  }
  @Mutation('createAlbum')
  create(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context() ctx: headerData
  ) {
    const { config } = ctx;
    return this.albumService.create(createAlbumInput, config);
  }
  @Mutation('updateAlbum')
  update(
    @Args('id') id: string,
    @Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput,
    @Context() ctx: headerData
  ) {
    const { config } = ctx;
    return this.albumService.update(id, updateAlbumInput, config);
  }
  @Mutation('deleteAlbum')
  remove(@Args('id') id: string, @Context() ctx: headerData) {
    const { config } = ctx;
    return this.albumService.remove(id, config);
  }
}
