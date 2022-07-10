import { Module } from '@nestjs/common';
import { BandService } from './services/band.service';
import { BandResolver } from './resolvers/band.resolver';
import { GenreService } from '../genres/services/genre.service';
import { GenreResolver } from '../genres/resolvers/genre.resolver';

@Module({
  providers: [BandResolver, BandService, GenreResolver, GenreService]
})
export class BandModule {}
