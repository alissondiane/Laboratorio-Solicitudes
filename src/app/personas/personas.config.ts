import { AppConfig } from '../app.config';

export class PersonasConfig {
  public static httpResource: any = {
    solicitudes:  AppConfig.SERVER_ADDRESS + '/personas'
  };
}
