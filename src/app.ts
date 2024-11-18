import  express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.use(express.json())
app.use(express.text())

app.get('/:userId/:subId', (req, res) => {
  console.log(req.params.userId);
  res.send('Hello, my name is Sadik!')
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('POST request received');
});

export default app;

