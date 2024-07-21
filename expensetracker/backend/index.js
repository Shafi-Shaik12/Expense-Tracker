
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authenticationRouter = require('./router/Autencationrouter');  
const expensiverouter = require('./router/expensiverouter'); 

const app = express();
const port =  3000;

app.use(express.json());
app.use(cors());

app.use('/api/auth', authenticationRouter);
app.use('/api/expenses', expensiverouter);

mongoose.connect("mongodb+srv://smdshafi1414:shafi123@cluster0.yznkvv0.mongodb.net/expense?retryWrites=true&w=majority&appName=Cluster0", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
