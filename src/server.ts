import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import { router } from './router';

const app = express();
app.use(cors())
app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
  
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




