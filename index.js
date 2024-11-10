const express = require("express");

const app = express();

// Use built-in middleware for parsing JSON
app.use(express.json());

function calculateSum(n) {
  let ans = 0;
  for (let i = 1; i <=n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/", (req, res) => {
    const n = req.query.n *1
    const ans = calculateSum(n)
  res.status(200).json({
    status: "success",
    data: ans
  });
});

app.post("/post", (req, res) => {
  console.log(req.query); // Logs the headers of the incoming request
  console.log(req.body); // Logs the body of the incoming request

  res.status(201).json({
    status: "success",
    data: "created",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
