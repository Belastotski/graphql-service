import { Module } from '@nestjs/common';
import { ArtistsResolver } from './resolvers/artist.resolver';
import { ArtistsService } from './services/artist.service';

@Module({
  providers: [ArtistsResolver, ArtistsService]
})
export class ArtistsModule {}
