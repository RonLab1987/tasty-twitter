import { IApplicationConfigRepository } from "./types";
import { Observable } from "rxjs";
import { IApplicationConfig } from "../../domain";
export declare class ApplicationConfigRepositoryLocal implements IApplicationConfigRepository {
    private _storage;
    private _config;
    constructor(_storage: Storage);
    get config$(): Observable<IApplicationConfig>;
    changeConfig(config: IApplicationConfig): Promise<void>;
    private _initConfig;
    private _saveConfig;
}
