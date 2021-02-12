import * as dotenv from 'dotenv';
import { IConfig } from './IConfig';

const envVars = dotenv.config().parsed;
console.log('Inside config', dotenv);
const config: IConfig = {
    PORT: envVars.PORT,
    NODE_ENV: envVars.NODE_ENV,
    MONGO_URL:envVars.MONGO_URL,
};
Object.freeze(config);
export default config;