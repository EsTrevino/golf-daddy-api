const express = require("express");
const mainRouter = require("./server/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/golfdaddy_v1", mainRouter);

app.listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`);
});
