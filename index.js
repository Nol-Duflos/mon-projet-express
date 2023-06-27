import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`VICTOIRE ! MIRACLE ! ${PORT}`);
});


// index.js

// import express from 'express';
// import routes from './routes';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use('/', routes);

// app.listen(PORT, () => {
//   console.log(`VICTOIRE ! MIRACLE ! ${PORT}`);
// });
