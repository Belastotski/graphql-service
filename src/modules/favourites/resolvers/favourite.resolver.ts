import {
  Args,
  Resolver,
  Parent,
  Query,
  Mutation,
  Context,
  ResolveField
} from '@nestjs/graphql';
import { Favourites } from 'src/graphql';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { TrackService } from 'src/modules/tracks/services/track.service';
import { headerData } from 'src/data.model';
import { FavouriteService } from '../services/favourite.service';

@Resolver('Favourites')
export class FavouriteResolver {
  constructor(
    private readonly favouriteService: FavouriteService,
    private readonly trackService: TrackService,
    private readonly artistService: ArtistService,
    private readonly bandService: BandService,
    private readonly genreService: GenreService
  ) {}

  @Resolver()
  @ResolveField()
  async tracks(@Parent() favourites: Favourites & { tracksIds: string[] }) {
    const { tracksIds } = favourites;
    return tracksIds.map((trackId) => this.trackService.findOne(trackId));
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() favourites: Favourites & { artistsIds: string[] }) {
    const { artistsIds } = favourites;
    return artistsIds.map((artistId) => this.artistService.findOne(artistId));
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() favourites: Favourites & { bandsIds: string[] }) {
    const { bandsIds } = favourites;
    return bandsIds.map((bandId) => this.bandService.findOne(bandId));
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() favourites: Favourites & { genresIds: string[] }) {
    const { genresIds } = favourites;
    return genresIds.map((genreId) => this.genreService.findOne(genreId));
  }

  @Query('favourites')
  findAll(@Context() header: headerData) {
    const { config } = header;
    return this.favouriteService.findAll(config);
  }

  @Mutation('addArtistToFavourites')
  addArtistToFavourites(@Args('id') id: string, @Context() header: headerData) {
    const { config } = header;
    return this.favouriteService.add('artists', id, config);
  }

  @Mutation('addTrackToFavourites')
  addTrackToFavourites(@Args('id') id: string, @Context() header: headerData) {
    const { config } = header;
    return this.favouriteService.add('tracks', id, config);
  }

  @Mutation('addBandToFavourites')
  addBandToFavourites(@Args('id') id: string, @Context() header: headerData) {
    const { config } = header;
    return this.favouriteService.add('bands', id, config);
  }

  @Mutation('addGenreToFavourites')
  addGenreToFavourites(@Args('id') id: string, @Context() header: headerData) {
    const { config } = header;
    return this.favouriteService.add('genres', id, config);
  }

  @Mutation('removeTrackToFavourites')
  removeTrackToFavourites(
    @Args('id') id: string,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.favouriteService.remove('tracks', id, config);
  }

  @Mutation('removeBandToFavourites')
  @Mutation('removeArtistToFavourites')
  removeArtistToFavourites(
    @Args('id') id: string,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.favouriteService.remove('artists', id, config);
  }

  removeBandToFavourites(
    @Args('id') id: string,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.favouriteService.remove('bands', id, config);
  }

  @Mutation('removeGenreToFavourites')
  removeGenreToFavourites(
    @Args('id') id: string,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.favouriteService.remove('genres', id, config);
  }
}
