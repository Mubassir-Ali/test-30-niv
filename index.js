const express = require("express");
const app = express();


const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const programRouter = require("./src/routes/programRoutes");
const testimonials = require("./src/routes/testimonialRoutes");

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use('/videos', express.static('videos'));


app.use("/programs", programRouter);
app.use("/testimonials", testimonials);


app.listen(parseInt(process.env.PORT), () => {
  console.log(`App running on port ${process.env.PORT}`);
});
