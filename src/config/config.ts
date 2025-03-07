import { siteMap as devConfig } from "./development";
import { siteMap as uatConfig } from "./uat";
import { siteMap as prodConfig } from "./production";

const ENV = import.meta.env.VITE_APP_ENV || "development";

const CONFIG_MAP: { [key: string]: any } = {
  development: devConfig,
  uat: uatConfig,
  production: prodConfig,
};

export const config = CONFIG_MAP[ENV];
