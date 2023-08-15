require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://admin-aspirants-abode:${process.env.MONGOOSE_PASS}@cluster0.a7d6y5c.mongodb.net/hostel-management-api?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    // useCreateIndex: true
})
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open",() => {
  console.log("Database Connected...");
});

