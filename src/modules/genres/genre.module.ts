import { Module } from '@nestjs/common';
import { GenreService } from './services/genre.service';
import { GenreResolver } from './resolvers/genre.resolver';

@Module({
  providers: [GenreResolver, GenreService]
})
export class GenreModule {}
