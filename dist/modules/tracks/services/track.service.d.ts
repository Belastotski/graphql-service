import { AxiosInstance } from 'axios';
import { CreateTrackInput, UpdateTrackInput } from 'src/graphql';
import { headerData } from 'src/data.model';
export declare class TrackService {
    client: AxiosInstance;
    constructor();
    findAll(limit: number, offset: number): Promise<any>;
    findOne(id: string): Promise<any>;
    create(createTrackInput: CreateTrackInput, config: headerData['config']): Promise<any>;
    update(id: string, updateTrackInput: UpdateTrackInput, config: headerData['config']): Promise<any>;
    remove(id: string, config: headerData['config']): Promise<any>;
}
