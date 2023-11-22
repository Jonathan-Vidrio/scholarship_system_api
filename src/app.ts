import express from 'express';
import cors from 'cors';

import router from "./api/routes";
import errorHandler from "./api/middlewares/errorHandler";

import initialSetUp from "./api/libs/initialSetUp";

const app = express();
initialSetUp().then(r => console.log("Initial setup completed"));

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

export default app;