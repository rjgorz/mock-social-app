const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();
app.use(express.json());
app.use(cors());

const postRouter = require('./routes/Posts')



app.use('/posts', postRouter);

db.sequelize.sync().then((req) => {
    app.listen(5000, () => { console.log("Server started on port 5000") });
});

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Express server!");
});

