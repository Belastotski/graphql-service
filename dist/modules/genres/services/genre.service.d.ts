import { AxiosInstance } from 'axios';
import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';
import { headerData } from 'src/data.model';
export declare class GenreService {
    client: AxiosInstance;
    constructor();
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    create(createGenreInput: CreateGenreInput, header: headerData['config']): Promise<any>;
    update(id: string, updateGenreInput: UpdateGenreInput, header: headerData['config']): Promise<any>;
    remove(id: string, header: headerData['config']): Promise<any>;
}
