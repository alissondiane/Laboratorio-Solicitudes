import { AppConfig } from '../app.config';

export class SolicitudesConfig {
  public static httpResource: any = {
    solicitudes:  AppConfig.SERVER_ADDRESS + '/solicitud'
  };
}
