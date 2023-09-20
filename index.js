require("./models/db");
const express=require("express");
const TodoRouter=require('./routes/ToDoRouter');
const mpngoose=require("mongoose");

const app = express();
var port= process.env.PORT || 3000;
app.use(express.json());

app.use("/",TodoRouter);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});