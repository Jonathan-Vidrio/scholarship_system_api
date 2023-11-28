import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const loadRoutes = async () => {
    const routeFiles = readdirSync(PATH_ROUTER);

    for (const file of routeFiles) {
        const fileName = file.split('.')[0];
        if (fileName === 'index') continue;
        const route = require(`${PATH_ROUTER}/${file}`);
        router.use(`/${fileName}`, route.default);
        console.log(`Route ${fileName} loaded in localhost:3000/api/${fileName}`);
    }
}

loadRoutes().catch(console.error);

export default router;