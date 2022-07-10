import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent
} from '@nestjs/graphql';
import { Band, CreateBandInput, UpdateBandInput } from 'src/graphql';
import { BandService } from '../services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { headerData } from 'src/data.model';

@Resolver('Band')
export class BandResolver {
  
  constructor(
    private readonly bandService: BandService,
    private readonly genreService: GenreService
  ) {}
  @Resolver()
  @ResolveField()
  async genres(@Parent() band: Band & { genresIds: string[] }) {
    const { genresIds } = band;
    return genresIds.map((genreId) => this.genreService.findOne(genreId));
  }
  @Query('bands')
  findAll(
    @Args('limit', { defaultValue: 10 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number
  ) {
    return this.bandService.findAll(limit, offset);
  }

  @Query('band')
  findOne(@Args('id') id: string) {
    return this.bandService.findOne(id);
  }
  @Mutation('createBand')
  create(
    @Args('createBandInput') createBandInput: CreateBandInput,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.bandService.create(createBandInput, config);
  }

  @Mutation('updateBand')
  update(
    @Args('id') id: string,
    @Args('updateBandInput') updateBandInput: UpdateBandInput,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.bandService.update(id, updateBandInput, config);
  }

  @Mutation('deleteBand')
  remove(@Args('id') id: string, @Context() header: headerData) {
    const { config } = header;
    return this.bandService.remove(id, config);
  }
}
