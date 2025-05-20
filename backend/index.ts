import express from'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import userRouter from "./routes/user.routes"
import adminRouter from "./routes/admin.routes"
import authRouter from "./routes/auth.routes"
import parkingRouter from "./routes/parking.routes"
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from "./swagger/swagger.json"




dotenv.config();

const app= express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","GET","OPTIONS","DELETE","PUT","PATCH"],
}))



// Third-party middlewares

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


// Route middlewares

app.use("/api/v1/user",userRouter)
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/parking",parkingRouter)



// Swagger endpoint

app.use("/api/v1/docs",swaggerUi.serve,swaggerUi.setup(swaggerDoc))

const PORT = process.env.PORT || 4000;


app.listen(PORT,()=>{
console.log(`app running on port ${PORT} `)
})