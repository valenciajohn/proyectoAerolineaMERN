/**
*Configuracion del servidor
*/

import 'dotenv/config'
import express from 'express'


import userRouter from './routes/userRoute.js'
import publicRouter from './routes/publicRoute.js'
import dashboardRoute from "./routes/dashboardRoute.js";


const app = express( );

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', publicRouter)
app.use('/api/v1/users', userRouter)
app.use('/', dashboardRoute);

const PORT = process.env.PORT || 3000

app.listen(PORT, ( ) => console.log('Servidor run ' + PORT))
