import {
  Resolver,
  Parent,
  Args,
  Query,
  Mutation,
  Context,
  ResolveField
} from '@nestjs/graphql';
import { Artist, CreateArtistInput, UpdateArtistInput } from 'src/graphql';
import { BandService } from 'src/modules/bands/services/band.service';
import { headerData } from 'src/data.model';
import { ArtistService } from '../services/artist.service';

@Resolver('Artist')
export class ArtistResolver {
  constructor(
    private readonly artistService: ArtistService,
    private readonly bandService: BandService
  ) {}

  @Resolver()
  @ResolveField()
  async bands(@Parent() artist: Artist & { bandsIds: string[] }) {
    const { bandsIds } = artist;
    return bandsIds.map((bandId) => this.bandService.findOne(bandId));
  }

  @Query('artists')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number
  ) {
    return this.artistService.findAll(limit, offset);
  }

  @Query('artist')
  findOne(@Args('id') id: string) {
    return this.artistService.findOne(id);
  }

  @Mutation('createArtist')
  create(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
    @Context() header: headerData
  ) {
    const { config } = header;

    return this.artistService.create(createArtistInput, config);
  }

  @Mutation('updateArtist')
  update(
    @Args('id') id: string,
    @Args('updateArtistInput') updateArtistInput: UpdateArtistInput,
    @Context() header: headerData
  ) {
    const { config } = header;

    return this.artistService.update(id, updateArtistInput, config);
  }

  @Mutation('deleteArtist')
  remove(@Args('id') id: string, @Context() header: headerData) {
    const { config } = header;
    return this.artistService.remove(id, config);
  }
}
