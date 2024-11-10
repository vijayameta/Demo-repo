const express = require("express");

const app = express();

let user = [
  {
    name: "John",
    kidneys: [
      {
        healty: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = user[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healty) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.use(express.json());

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healty: isHealthy,
  });
  res.json({
    meg: "ok",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healty = true;
  }
  res.json({
    meg: "ok",
  });
});
app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (user[0].kidneys[i].healty) {
      newKidneys.push({
        healty: true,
      });
    }
  }
  user[0].kidneys = newKidneys;
  res.json({
    meg: "ok",
  });
});

app.listen(3000, () => {
  console.log("app is running on 3000...");
});
