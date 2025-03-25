import Express, { Application, Request, Response } from 'express';

export const app: Application = Express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello From my REST API');
});
