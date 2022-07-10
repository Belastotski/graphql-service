import { CreateTrackInput, Track, UpdateTrackInput } from 'src/graphql';
import { AlbumService } from 'src/modules/albums/services/album.service';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { headerData } from 'src/data.model';
import { TrackService } from '../services/track.service';
export declare class TrackResolver {
    private readonly albumService;
    private readonly artistService;
    private readonly bandService;
    private readonly genreService;
    private readonly trackService;
    constructor(albumService: AlbumService, artistService: ArtistService, bandService: BandService, genreService: GenreService, trackService: TrackService);
    album(track: Track & {
        albumId: string;
    }): Promise<any>;
    artists(track: Track & {
        artistsIds: string[];
    }): Promise<Promise<any>[]>;
    bands(track: Track & {
        bandsIds: string[];
    }): Promise<Promise<any>[]>;
    genres(track: Track & {
        genresIds: string[];
    }): Promise<Promise<any>[]>;
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    create(createTrackInput: CreateTrackInput, header: headerData): Promise<any>;
    update(id: string, updateTrackInput: UpdateTrackInput, header: headerData): Promise<any>;
    remove(id: string, header: headerData): Promise<any>;
}
