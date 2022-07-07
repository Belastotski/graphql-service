import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { headerData } from 'src/data.model';
import { ArtistsService } from '../services/artist.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Mutation('createArtist')
  create(
    @Args('firstName') firstName: string,
    @Args('secondName') secondName: string,
    @Args('middleName') middleName: string,
    @Args('birthDate') birthDate: string,
    @Args('birthPlace') birthPlace: string,
    @Args('country') country: string,
    @Args('bands') bands: string[],
    @Args('instruments') instruments: string[],
    @Context() ctx: headerData
  ) {
    const { config } = ctx;

    return this.artistsService.create(
      firstName,
      secondName,
      middleName,
      birthDate,
      birthPlace,
      country,
      bands,
      instruments,
      config
    );
  }

  @Query('artists')
  findAll(
    @Args('limit', { defaultValue: 10 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number
  ) {
    return this.artistsService.findAll(limit, offset);
  }

  @Query('artist')
  findOne(@Args('id') id: string) {
    return this.artistsService.findOne(id);
  }

  @Mutation('updateArtist')
  update(
    @Args('id') id: string,
    @Args('firstName') firstName: string,
    @Args('secondName') secondName: string,
    @Args('middleName') middleName: string,
    @Args('birthDate') birthDate: string,
    @Args('birthPlace') birthPlace: string,
    @Args('country') country: string,
    @Args('bands') bands: string[],
    @Args('instruments') instruments: string[],
    @Context() ctx: headerData
  ) {
    const { config } = ctx;

    return this.artistsService.update(
      id,
      firstName,
      secondName,
      middleName,
      birthDate,
      birthPlace,
      country,
      bands,
      instruments,
      config
    );
  }

  @Mutation('deleteArtist')
  remove(@Args('id') id: string, @Context() ctx: headerData) {
    const { config } = ctx;
    return this.artistsService.remove(id, config);
  }
}
