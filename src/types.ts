import { PlatformConfig } from 'homebridge';

export type ServiceType =
  | 'contact-sensor'
  | 'bulb'
  | 'motion-sensor'
  | 'vibration-sensor'
  | 'battery'
  | 'humidity-sensor'
  | 'temperature-sensor'
  | 'outlet';

export interface ExposedServiceConfig {
  type: ServiceType;
  meta: {
    colorTemp?: boolean;
    batteryLow?: boolean;
    colorXY?: boolean;
    brightness?: boolean;
    hue?: boolean;
    saturation?: boolean;
    power?: boolean;
    voltage?: boolean;
    current?: boolean;
  };
}

export interface DeviceConfig {
  manufacturer: string;
  models: string[];
  exposedServices: ExposedServiceConfig[];
}

export interface ZigBeeNTPlatformConfig extends PlatformConfig {
  name: string;
  port?: string;
  panId?: number;
  channel?: number;
  secondaryChannel?: string;
  database?: string;
  httpPort?: number;
  disableRoutingPolling?: boolean;
  disableHttpServer?: boolean;
  routerPollingInterval?: number;
  enablePermitJoin?: boolean;
  devices?: DeviceConfig[];
}
