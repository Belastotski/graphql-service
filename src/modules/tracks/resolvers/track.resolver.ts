import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent
} from '@nestjs/graphql';
import { CreateTrackInput, Track, UpdateTrackInput } from 'src/graphql';
import { AlbumService } from 'src/modules/albums/services/album.service';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { headerData } from 'src/data.model';
import { TrackService } from '../services/track.service';

@Resolver('Track')
export class TrackResolver {
  constructor(
    private readonly albumService: AlbumService,
    private readonly artistService: ArtistService,
    private readonly bandService: BandService,
    private readonly genreService: GenreService,
    private readonly trackService: TrackService
  ) {}

  @Resolver()
  @ResolveField()
  async album(@Parent() track: Track & { albumId: string }) {
    const { albumId } = track;
    return this.albumService.findOne(albumId);
  }
  @Resolver()
  @ResolveField()
  async artists(@Parent() track: Track & { artistsIds: string[] }) {
    const { artistsIds } = track;
    return artistsIds.map((artistId) => this.artistService.findOne(artistId));
  }
  @Resolver()
  @ResolveField()
  async bands(@Parent() track: Track & { bandsIds: string[] }) {
    const { bandsIds } = track;
    return bandsIds.map((bandId) => this.bandService.findOne(bandId));
  }
  @Resolver()
  @ResolveField()
  async genres(@Parent() track: Track & { genresIds: string[] }) {
    const { genresIds } = track;
    return genresIds.map((genreId) => this.genreService.findOne(genreId));
  }

  @Query('tracks')
  findAll(
    @Args('limit', { defaultValue: 10 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number
  ) {
    return this.trackService.findAll(limit, offset);
  }

  @Query('track')
  findOne(@Args('id') id: string) {
    return this.trackService.findOne(id);
  }

  @Mutation('createTrack')
  create(
    @Args('createTrackInput') createTrackInput: CreateTrackInput,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.trackService.create(createTrackInput, config);
  }

  @Mutation('updateTrack')
  update(
    @Args('id') id: string,
    @Args('updateTrackInput') updateTrackInput: UpdateTrackInput,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.trackService.update(id, updateTrackInput, config);
  }

  @Mutation('deleteTrack')
  remove(@Args('id') id: string, @Context() header: headerData) {
    const { config } = header;
    return this.trackService.remove(id, config);
  }
}
