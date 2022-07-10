import { Album, CreateAlbumInput, UpdateAlbumInput } from 'src/graphql';
import { AlbumService } from '../services/album.service';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { TrackService } from 'src/modules/tracks/services/track.service';
import { headerData } from 'src/data.model';
export declare class AlbumResolver {
    private readonly albumService;
    private readonly trackService;
    private readonly artistService;
    private readonly bandService;
    private readonly genreService;
    constructor(albumService: AlbumService, trackService: TrackService, artistService: ArtistService, bandService: BandService, genreService: GenreService);
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    artists(album: Album & {
        artistsIds: string[];
    }): Promise<Promise<any>[]>;
    bands(album: Album & {
        bandsIds: string[];
    }): Promise<Promise<any>[]>;
    genres(album: Album & {
        genresIds: string[];
    }): Promise<Promise<any>[]>;
    tracks(album: Album & {
        trackIds: string[];
    }): Promise<Promise<any>[]>;
    create(createAlbumInput: CreateAlbumInput, ctx: headerData): Promise<any>;
    update(id: string, updateAlbumInput: UpdateAlbumInput, ctx: headerData): Promise<any>;
    remove(id: string, ctx: headerData): Promise<any>;
}
