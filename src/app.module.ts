import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import axios from 'axios';
import { join } from 'path';
// import { ArtistsModule } from './modules/artists/artists.module';
// import { BandsModule } from './modules/bands/bands.module';
// import { GenresModule } from './modules/genres/genres.module';
// import { TracksModule } from './modules/tracks/tracks.module';
// import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./modules/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      },
      context: ({ req }) => {
        return {
          config: {
            headers: {
              Authorization: req.headers.authorization || ''
            }
          }
        }
      }
    })
    // ArtistsModule,
    // BandsModule,
    // GenresModule,
    // TracksModule
    // UsersModule,
  ]
})
export class AppModule {}
