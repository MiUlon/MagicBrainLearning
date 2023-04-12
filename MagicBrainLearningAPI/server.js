import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';

const postgres = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port : 5432,
        user : 'postgres',
        password : '',
        database : 'MagicBrainLearning'
    }
});

console.log(postgres.select('*').from('users'));

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '1',
            name: 'Mindaugas',
            email: "Mindaugas@gmail.com",
            password: "Mindaugas",
            entries: 0,
            joined: new Date()

        },
        {
            id: '2',
            name: 'Mindaugas2',
            email: "Mindaugas2@gmail.com",
            password: "Mindaugas2",
            entries: 0,
            joined: new Date()

        }
    ],
    login: [
        {
            id: '01',
            hash: '',
            email: "Mindaugas@gmail.com"
        }
    ]
};

app.get('/', (req, res) => {
    res.json(database.users);
});

app.post('/signin', (req, res) => {
    bcrypt.compare("Mindaugas3", '$2a$10$m.xaDxAMpS2SdmWsUSpHrOaLYmP0u0XihWSRcygawH6F/1htgvuwO', function(err, res) {
        console.log('Response: ', res)
    });
    bcrypt.compare("veggies", '$2a$10$m.xaDxAMpS2SdmWsUSpHrOaLYmP0u0XihWSRcygawH6F/1htgvuwO', function(err, res) {
        console.log('Response: ', res)
    });
    if (req.body.email = database.users[0].email && req.body.password === database.users[0].password) {
        res.json('Success');
    } else {
        res.status(400).json('Error while signin in.');
    };
});

app.post('/register', (req, res) => {
    const { name, email, password} = req.body;
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash);
    });
    database.users.push({
        id: '3',
        name: name,
        email: email,
        entries: 0,
        joined: new Date()
    });
    res.json(database.users[database.users.length-1]);
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            res.json(user);
        };
    });
    if (!found) {
        res.status(404).json('Not Found');
    };
});

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            return res.json(user.entries);
        };
    });
    if (!found) {
        res.status(404).json('Not found');
    };
});

app.listen(3001, () => {
    console.log('App is working on port 3001.');
});