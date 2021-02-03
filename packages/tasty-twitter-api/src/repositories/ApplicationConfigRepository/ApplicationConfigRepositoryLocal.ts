import { IApplicationConfigRepository } from "./types";
import { Observable, ReplaySubject } from "rxjs";
import { IApplicationConfig } from "../../domain";
import { APPLICATION_CONFIG_KEY, DEFAULT_CONFIG } from "./constants";

export class ApplicationConfigRepositoryLocal
  implements IApplicationConfigRepository {
  private _config = new ReplaySubject<IApplicationConfig>(1);

  constructor(private _storage: Storage) {
    this._initConfig();
  }

  get config$(): Observable<IApplicationConfig> {
    return this._config;
  }

  changeConfig(config: IApplicationConfig): Promise<void> {
    return new Promise<void>(resolve => {
      this._config.next(config);
      this._saveConfig(config);
      resolve();
    });
  }

  private _initConfig() {
    const config = this._storage.getItem(APPLICATION_CONFIG_KEY);
    if (!config) {
      this._config.next(DEFAULT_CONFIG);
      return;
    }
    this._config.next(JSON.parse(config));
  }

  private _saveConfig(config: IApplicationConfig) {
    this._storage.setItem(APPLICATION_CONFIG_KEY, JSON.stringify(config));
  }
}
