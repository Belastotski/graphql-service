import { AxiosInstance } from 'axios';
import { CreateBandInput, UpdateBandInput } from 'src/graphql';
import { headerData } from 'src/data.model';
export declare class BandService {
    client: AxiosInstance;
    constructor();
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    create(createBandInput: CreateBandInput, header: headerData['config']): Promise<any>;
    update(id: string, updateBandInput: UpdateBandInput, header: headerData['config']): Promise<any>;
    remove(id: string, header: headerData['config']): Promise<any>;
}
