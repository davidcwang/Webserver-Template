import express from "express";

export const register = (app: express.Application) => {
    app.get('/', (req: any, res) => {
        const data = {'result_string': 'hello world'}
        console.log('Sending ', data);
        res.send(data);
    });
};
