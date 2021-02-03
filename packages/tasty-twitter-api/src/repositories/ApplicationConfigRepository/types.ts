import { Observable } from "rxjs";
import { IApplicationConfig } from "../../domain";
import { InjectionToken } from "tsyringe";

export interface IApplicationConfigRepository {
  config$: Observable<IApplicationConfig>;
  changeConfig(config: IApplicationConfig): Promise<void>;
}

export const IApplicationConfigRepositoryToken: InjectionToken<IApplicationConfigRepository> =
  "IApplicationConfigRepository";
