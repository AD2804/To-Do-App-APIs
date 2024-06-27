
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const taskRouter = require('./routes/taskRoute');
const db = require('./models'); // Ensure models are imported to initialize associations


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/task', taskRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});