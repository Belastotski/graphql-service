import { Favourites } from 'src/graphql';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { TrackService } from 'src/modules/tracks/services/track.service';
import { headerData } from 'src/data.model';
import { FavouriteService } from '../services/favourite.service';
export declare class FavouriteResolver {
    private readonly favouriteService;
    private readonly trackService;
    private readonly artistService;
    private readonly bandService;
    private readonly genreService;
    constructor(favouriteService: FavouriteService, trackService: TrackService, artistService: ArtistService, bandService: BandService, genreService: GenreService);
    tracks(favourites: Favourites & {
        tracksIds: string[];
    }): Promise<Promise<any>[]>;
    artists(favourites: Favourites & {
        artistsIds: string[];
    }): Promise<Promise<any>[]>;
    bands(favourites: Favourites & {
        bandsIds: string[];
    }): Promise<Promise<any>[]>;
    genres(favourites: Favourites & {
        genresIds: string[];
    }): Promise<Promise<any>[]>;
    findAll(header: headerData): Promise<any>;
    addArtistToFavourites(id: string, header: headerData): Promise<any>;
    addTrackToFavourites(id: string, header: headerData): Promise<any>;
    addBandToFavourites(id: string, header: headerData): Promise<any>;
    addGenreToFavourites(id: string, header: headerData): Promise<any>;
}
