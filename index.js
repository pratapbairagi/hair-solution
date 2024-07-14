const express = require("express");
const { dbConnection } = require("./db/dbConnection");
const productsRoute = require("./routes/products");
const userRouter = require("./routes/user");
const cors = require("cors");
const fileupload = require("express-fileupload");
// const http = require("http");
const  globalError_handler  = require("./utils/globalError_handler");
const path = require("path");
const galleryRoute = require("./routes/gallery");
const cookieParser = require("cookie-parser");
const clientRoute = require("./routes/client");
const reviewRoute = require("./routes/review");

const app = express();
const PORT =  8000;


app.use(cors({
  credentials : true,
  origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:8000",
      "https://no-pain-hair-solution.vercel.app",
      "https://hair-solution.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// require("dotenv").config()

app.use(cookieParser())
app.use(express.json({ extended: true, limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(fileupload());

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//     next()
//   })

app.use("/api/app", productsRoute);
app.use("/api/app", userRouter);
app.use("/api/app", galleryRoute);
app.use("/api/app", clientRoute);
app.use("/api/app", reviewRoute);

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