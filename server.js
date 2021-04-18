const express = require("express");

const app = express();
var date = new Date();
// declarig routes
const homeRoute = require("./routes/home");
const contactusRoute = require("./routes/contactus");
const ourservicesRoute = require("./routes/ourservices");
// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(function (req, res, next) {
    //console.log('Time:', date.getDay())
if (date.getDay() !== 0 || date.getDay()== 7){
  res.send('Out Of Service')
}
    next()});

// routes  
app.use("/", homeRoute);
app.use("/contactUs", contactusRoute);
app.use("/ourServices", ourservicesRoute);
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is runnning on port ${PORT}`)
);