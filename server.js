const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const studentRoutes = require('./routes/studentRoutes')

const app = express();
db.sequelize.sync({force:true})
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('CRUD API without any external help');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})