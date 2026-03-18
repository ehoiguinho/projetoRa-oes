import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "API Rações Almeida",
        description: "API que está sendo desenvolvida para uma fábrica de sementes e rações"
    },
    host: "localhost:3000"
}
const saida = "./outputSwagger.json";
const routes = ["./server.js"];

swaggerAutogen({openapi: '3.0.0'})(saida, routes, doc)
.then(async () => {
    await import("./server.js")
})