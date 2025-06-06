import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './src/routes/authRoutes';

const app = express();
dotenv.config();
app.use(express.json());

//routes

app.use('/auth', authRoutes);

//autenticacion

//user

console.log("esto esta siendo ejecutado");

export default app;