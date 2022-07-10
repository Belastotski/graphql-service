import { Resolver, Args, Query, Mutation, Context } from '@nestjs/graphql';
import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';
import { GenreService } from '../services/genre.service';
import { headerData } from 'src/data.model';

@Resolver('Genre')
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Query('genres')
  findAll(
    @Args('limit', { defaultValue: 10 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number
  ) {
    return this.genreService.findAll(limit, offset);
  }
  @Query('genre')
  findOne(@Args('id') id: string) {
    return this.genreService.findOne(id);
  }

  @Mutation('createGenre')
  create(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.genreService.create(createGenreInput, config);
  }

  @Mutation('updateGenre')
  update(
    @Args('id') id: string,
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
    @Context() header: headerData
  ) {
    const { config } = header;
    return this.genreService.update(id, updateGenreInput, config);
  }

  @Mutation('deleteGenre')
  remove(@Args('id') id: string, @Context() header: headerData) {
    const { config } = header;
    return this.genreService.remove(id, config);
  }
}
