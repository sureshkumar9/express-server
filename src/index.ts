import Server from './server';
import { config }  from './config/index';

console.log('Config is', config);
const server = new Server(config);
server.bootstrap().run();