import { AppConfig } from '../app.config';

export class InstitucionesConfig {
  public static httpResource: any = {
    solicitudes:  AppConfig.SERVER_ADDRESS + '/institucion'
  };
}
