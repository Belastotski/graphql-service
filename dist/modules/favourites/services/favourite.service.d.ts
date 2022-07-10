import { AxiosInstance } from 'axios';
import { headerData } from 'src/data.model';
export declare class FavouriteService {
    client: AxiosInstance;
    constructor();
    findAll(config: headerData['config']): Promise<any>;
    add(type: string, id: string, config: headerData['config']): Promise<any>;
    remove(type: string, id: string, config: headerData['config']): Promise<any>;
}
