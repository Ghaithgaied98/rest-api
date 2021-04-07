const db = require("dotenv").config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const app =express();
const path = require("path");
const router = express.Router();
const usersRouter = require("./Routers/users");
app.use("/users", usersRouter);
app.use(express.json());



var server =app.listen(3000,function(){
    var host =server.address().address;
    var port = server.address().port;
    console.log('app listening on',port);
})