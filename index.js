import express from 'express';
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// all routes in here is starting with  /
app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.send("Hello from root");
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});