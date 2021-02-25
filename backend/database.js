const mongoose = require("mongoose");
const connection =
  "mongodb+srv://wyalwy:tr4ining@cluster0-zkody.mongodb.net/exercisetracker?retryWrites=true&w=majority";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
