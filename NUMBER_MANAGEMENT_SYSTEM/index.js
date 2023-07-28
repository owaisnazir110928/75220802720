const express = require("express");
const numberManagementRouter = require("./numberManagementRouter");

const app = express();

app.use(express.json());
app.use(numberManagementRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
