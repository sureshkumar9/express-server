"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const index_1 = require("./config/index");
console.log('Config is', index_1.config);
const server = new server_1.default(index_1.config);
server.bootstrap().run();
//# sourceMappingURL=index.js.map