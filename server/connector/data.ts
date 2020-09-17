import express from 'express';
import fetch from 'node-fetch';
import { Request, Response } from 'express';
import util from 'util';

/**
 * Generic Data Router
 */

 const BASE_URL = 'https://openlibrary.org/api/books?bibkeys=ISBN';
 const BOOK_COVER_URL = 'http://covers.openlibrary.org/b';
//  const BOOK_COVER_URL = 'http://covers.openlibrary.org/b/$key/$value-$size.jpg'
export const DataRouter = express.Router();

DataRouter.get('/', async (req: Request, res: Response) => {
    console.log('hit /bookInfo Server endpoint')
    try {
        const isbn = req.query.isbn;
        const url: string = util.format('%s:%s', BASE_URL, isbn);
        const coverUrl: string = util.format('%s/isbn/%s-L.jpg', BOOK_COVER_URL, isbn);
        const coverResponse = await fetch(url);

        const response = await fetch(url);

        const data = await response.text();
        res.status(200).send(data);

    } catch (e) {
        res.status(404).send(e.message);
    }
});

DataRouter.get('/bookCover', async (req: Request, res: Response) => {
    try {
        const isbn = req.query.isbn;
        const url: string = util.format('%s/isbn/%s-L.jpg', BOOK_COVER_URL, isbn);
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