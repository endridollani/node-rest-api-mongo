import dotenv from "dotenv";
dotenv.config();

const swaggerConfig = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "REST API",
      version: "0.1.0",
      description:
        "This is a REST API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
  },
  apis: ["src/router/*.ts"],
};

export default swaggerConfig;
