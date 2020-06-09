import express from 'express';
import fetch from 'node-fetch';
import { Request, Response } from 'express';
import util from 'util';

/**
 * Generic Data Router
 */

//  const BASE_URL = 'http://covers.openlibrary.org/b/isbn/9780385533225-S.jpg'
//  const BASE_URL = 'https://openlibrary.org/api/books?bibkeys=ISBN:0201558025'
 const BASE_URL = 'https://openlibrary.org/api/books?bibkeys=ISBN';

export const DataRouter = express.Router();

DataRouter.get('/bookInfo', async (req: Request, res: Response) => {
    try {
        const isbn = req.query.isbn;
        const url: string = util.format('%s:%s', BASE_URL, isbn);
        console.log('isbn', isbn);
        console.log('url', url);

        const response = await fetch(url);
        console.log('response', response);

        const data = await response.text();
        console.log('data', data);
        res.status(200).send(data);

    } catch (e) {
        res.status(404).send(e.message);
    }
});