const express = require("express");
const { dbConnection } = require("./db/dbConnection");
const productsRoute = require("./routes/products");
const userRouter = require("./routes/user");
const cors = require("cors");
const fileupload = require("express-fileupload");
// const http = require("http");
const  globalError_handler  = require("./utils/globalError_handler");
const path = require("path")

const app = express();

app.use(
    cors({
        // credentials : true,
        origin : ["http://localhost:3000", "http://localhost:8000", "https://no-pain-hair-solution.vercel.app", "https://hair-solution.vercel.app"],
        methods: "GET, POST, PUT, PATCH, DELETE",
        allowedHeaders: "Content-Type, Authorization"
      })
)

// require("dotenv").config()
const PORT =  8000;


app.use(express.json({extended : true, limit : "25mb"}));
app.use(express.urlencoded({extended : true, limit : "25mb"}));

app.use(fileupload())

app.use("/api/app", productsRoute);
app.use("/api/app", userRouter);

app.use(express.static(path.join(__dirname, './client/build/')));

app.get('*', (req, res) =>{
 return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

// app.get("/", async(req, res)=>{
//     return res.send("hello world")
// })

app.use(globalError_handler)

dbConnection()

app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`)
})