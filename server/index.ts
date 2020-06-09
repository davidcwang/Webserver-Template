import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
// import * as routes from './routes';

import { Request, Response } from 'express';
import { DataRouter } from './connector/data';

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8080;

// app.set('views', path.join(__dirname, 'views'));

// Configure routes.
// routes.register(app);

app.use('/api/v1/bookInfo', DataRouter);

app.get('/data', (req: any, res) => {
    const data = 'some data';
    console.log('Sending ', data);
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`);
});
