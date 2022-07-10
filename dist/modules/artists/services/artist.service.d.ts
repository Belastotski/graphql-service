import { CreateArtistInput, UpdateArtistInput } from 'src/graphql';
import { AxiosInstance } from 'axios';
import { headerData } from 'src/data.model';
export declare class ArtistService {
    client: AxiosInstance;
    constructor();
    create(createArtistInput: CreateArtistInput, config: headerData['config']): Promise<any>;
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateArtistInput: UpdateArtistInput, config: headerData['config']): Promise<any>;
    remove(id: string, config: headerData['config']): Promise<any>;
}
