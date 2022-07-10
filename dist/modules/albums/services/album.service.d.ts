import { AxiosInstance } from 'axios';
import { CreateAlbumInput, UpdateAlbumInput } from 'src/graphql';
import { headerData } from 'src/data.model';
export declare class AlbumService {
    client: AxiosInstance;
    constructor();
    create(CreateAlbumInput: CreateAlbumInput, header: headerData['config']): Promise<any>;
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, UpdateAlbumInput: UpdateAlbumInput, header: headerData['config']): Promise<any>;
    remove(id: string, header: headerData['config']): Promise<any>;
}
