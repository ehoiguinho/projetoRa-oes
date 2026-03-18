import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from "module";
import adminRouter from './routes/adminRoute.js'
import produtoRouter from './routes/produtoRoute.js'
const require = createRequire(import.meta.url);
const outputJson = require("./outputSwagger.json");

const server = express();

server.use(express.json());
server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson))
server.use("/admin", adminRouter);
server.use("/produto", produtoRouter);

server.listen(3000, () => {
    console.log("servidor web funcionando!");
})