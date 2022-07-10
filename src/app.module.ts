import 'dotenv/config';
import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AlbumModule } from './modules/albums/album.module';
import { ArtistModule } from './modules/artists/artist.module';
import { BandModule } from './modules/bands/band.module';
import { GenreModule } from './modules/genres/genre.module';
import { FavouriteModule } from './modules/favourites/favourite.module';
import { TrackModule } from './modules/tracks/track.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      },
      context: ({ req }) => {
        const token: string = req.headers.authorization || '';
        return {
          config: {
            headers: {
              Authorization: token
            }
          }
        };
      }
    }),
    AlbumModule,
    ArtistModule,
    BandModule,
    GenreModule,
    FavouriteModule,
    TrackModule,
    UserModule
  ]
})
export class AppModule {}
