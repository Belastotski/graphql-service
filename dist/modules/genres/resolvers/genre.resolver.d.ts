import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';
import { GenreService } from '../services/genre.service';
import { headerData } from 'src/data.model';
export declare class GenreResolver {
    private readonly genreService;
    constructor(genreService: GenreService);
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    create(createGenreInput: CreateGenreInput, header: headerData): Promise<any>;
    update(id: string, updateGenreInput: UpdateGenreInput, header: headerData): Promise<any>;
    remove(id: string, header: headerData): Promise<any>;
}
