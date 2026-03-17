import express from 'express';

import swaggerUi from 'swagger-ui-express';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./outputSwagger.json");

const server = express();

server.use(express.json());
server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson))

server.listen(3000, () => {
    console.log("servidor web funcionando!");
})