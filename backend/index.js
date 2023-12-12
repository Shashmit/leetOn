const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path"); 
const leetcodeRouter = require("./route/leetcodeRouter");
app.use(cors());
app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

const port = 3000;

app.get("/test", (req, res) => {
  res.send("This is the best platform ever. I'm not biased at all.");
});

app.use("/api", leetcodeRouter.leetcode);

app.use(express.static("public"));
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
