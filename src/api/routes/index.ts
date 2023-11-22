import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const loadRoutes = async () => {
    const routeFiles = readdirSync(PATH_ROUTER).filter(file => file !== 'index.ts');

    for (const file of routeFiles) {
        const fileName = file.split('.')[0];
        const module = await import(`./${fileName}`);
        router.use(`/${fileName}`, module.default);
        console.log(`Route ${fileName} loaded in localhost:3000/api/${fileName}`);
    }
}

loadRoutes().catch(console.error);

export default router;