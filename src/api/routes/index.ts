import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).forEach((file) => {
    const fileName = file.split('.')[0];
    if (fileName !== 'index') {
        console.log(`Loading route: ${fileName}`);
        router.use(`/${fileName}`, require(`./${fileName}`).default);
    }
});

export default router;