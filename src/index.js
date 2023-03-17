import express from 'express';
import routes from './routes/routes.js';
import verifyFieldName from './middleware/verify-field-name.middleware.js';

const app = express(); 

const PORT = 3333;

app.use(express.json())
app.use(verifySFieldName)

app.use(routes);

app.listen(PORT, () => console.log('server running in localhost:${PORT}'));