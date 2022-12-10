import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`API running on port '${PORT}'`);
});

app.get('/api/todos', async (req, res) => {

   const data = [{
      id: 'ksoamdjsiz',
      description: 'Lorem Ipsum.',
      dueDate: new Date('12/07/2022'),
      priority: 3
   }, {
      id: 'jeksmzorkc',
      description: 'Lorem Ipsum.',
      dueDate: new Date('12/07/2022'),
      priority: 1
   }, {
      id: 'kdlzmsocte',
      description: 'Lorem Ipsum.',
      dueDate: new Date('12/24/2022'),
      priority: 2
   }];

   res.send(JSON.stringify(data));

});