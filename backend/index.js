// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const routes = require('./routes');

// app.use(express.json());
// app.use(cors());

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log('Serwer uruchomiony jest na porcie ${port}');
// });

// mongoose.connect('mongodb+srv://wiktormarkowicz:23012000@cluster0.gdx9pcn.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Błąd połączenia MongoDB:'));
// db.once('open', () => {
//   console.log('Połączono z MongoDB');
// });

// app.use('/api', routes);

// // Middleware do zabezpieczenia ścieżek - przykład
// const authenticate = require('./middleware/authenticate');

// app.get('/api/protected', authenticate, (req, res) => {
//   res.json({ message: 'Protected endpoint' });
// });

require( 'babel-core/register' );
require( './app/app');
