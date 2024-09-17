import express, { Express, Request, Response } from 'express';
import { CorsOptions } from 'cors';
import cors from 'cors';
import mysql from 'mysql';
const app: Express = express();
const port = process.env.PORT || 3003;
const db = mysql.createConnection({
    user:'hamza',
    host: '127.0.0.1',
    password: '7AMZA5anfara&é',
    database:'project1'
})
// Configure CORS options
const allowedOrigins = ['http://localhost:3003','http://localhost:3002']; // Specify your allowed origins
const options: CorsOptions = {
    origin: allowedOrigins,
};

app.use(cors(options)); // Use CORS middleware with options
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server with CORS enabled');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});

app.post('/iseven', (req,res) =>{
    const numb = req.body.val
    if(numb % 2 == 0){
        res.send({answer:'Even'})
    }else{
        res.send({answer:'Odd'})
    }
})
app.post('/addUser', (req,res) =>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    db.query("INSERT INTO users(firstName, lastName) VALUE (?,?)",[firstName, lastName],(err, res)=>{
        if(err){
            console.log(err)
        }
    })
})