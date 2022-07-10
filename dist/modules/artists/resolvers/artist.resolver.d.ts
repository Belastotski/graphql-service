import { Artist, CreateArtistInput, UpdateArtistInput } from 'src/graphql';
import { BandService } from 'src/modules/bands/services/band.service';
import { headerData } from 'src/data.model';
import { ArtistService } from '../services/artist.service';
export declare class ArtistResolver {
    private readonly artistService;
    private readonly bandService;
    constructor(artistService: ArtistService, bandService: BandService);
    bands(artist: Artist & {
        bandsIds: string[];
    }): Promise<Promise<any>[]>;
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    create(createArtistInput: CreateArtistInput, header: headerData): Promise<any>;
    update(id: string, updateArtistInput: UpdateArtistInput, header: headerData): Promise<any>;
    remove(id: string, header: headerData): Promise<any>;
}
