import express from "express";

export const register = (app: express.Application) => {
    app.get('/', (req: any, res) => {
        const data = 'some data2'
        console.log('Sending ', data);
        res.send(data);
    });
};
