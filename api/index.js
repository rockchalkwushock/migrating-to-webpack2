import express from 'express';
import path from 'path';
import { dbConfig, middlewaresConfig } from './config';

const app = express();

const MODE = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

// routes here

let mongoConf;

switch (MODE) {
  case 'production': {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
    mongoConf = process.env.MONGO_URI;
    break;
  }
  case 'test': {
    // set db here
    break;
  }
  default: {
    // set db here
    break;
  }

}

// DATABASE
dbConfig(mongoConf);

// MIDDLEWARE
middlewaresConfig(app);

app.listen(PORT, err => {
  if (err) { return console.error(err); }

  console.log(`App running to port: ${PORT} in ${MODE}`);
});
