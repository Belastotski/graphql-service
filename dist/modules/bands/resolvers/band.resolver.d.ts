import { Band, CreateBandInput, UpdateBandInput } from 'src/graphql';
import { BandService } from '../services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { headerData } from 'src/data.model';
export declare class BandResolver {
    private readonly bandService;
    private readonly genreService;
    constructor(bandService: BandService, genreService: GenreService);
    genres(band: Band & {
        genresIds: string[];
    }): Promise<Promise<any>[]>;
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    create(createBandInput: CreateBandInput, header: headerData): Promise<any>;
    update(id: string, updateBandInput: UpdateBandInput, header: headerData): Promise<any>;
    remove(id: string, header: headerData): Promise<any>;
}
