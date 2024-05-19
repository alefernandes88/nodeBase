import { Request, Response, Application } from "express";

//@typescript-eslint/no-var-requires
const express = require("express");

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("teste");
})

export default app;