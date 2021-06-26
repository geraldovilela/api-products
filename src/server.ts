import express, { NextFunction, Request, Response } from 'express';
import "reflect-metadata";
import { createConnection } from 'typeorm';

import { router } from './router';

createConnection().then(connection => {

  const app = express();
  app.use(express.json());
  app.use(router);

  app.get("/", (req, res) => {
    return res.json({ message: "Hello there!!!" })
  })

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.message,
        name: err.name,
        stack: err.stack
      })
    }

    return res.status(500).json({
      message: "Internal server error"
    })
  });


  app.listen(3333, () => {
    console.log("🚀 😜 🚀 Server is running")
  })

})



