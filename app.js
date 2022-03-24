const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");
// middleware
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () =>
      console.log(`Server app listening on port ${port}!`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
