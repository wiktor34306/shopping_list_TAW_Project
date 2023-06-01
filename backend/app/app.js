import bodyParser from 'body-parser';
import config from './config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
// import routes from './REST/routes';

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

app.use(express.static('public'));

app.use(cors());

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true
}, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.info('Połączono się z ustawioną bazą danych');
    }
});

process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.error('Domyślne połączenie Mongoose zostało rozłączone z powodu zamknięcia aplikacji');
        process.exit(0);
    });
});


// routes(app);

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port, function () {
  console.info(`Serwer działa na porcie ${config.port}`)
});
