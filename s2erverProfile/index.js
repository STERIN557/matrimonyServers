const { json, urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ urlencoded: false, extended: false }));

const userProfileData = {
  name: "Abraham john",
  backgroundImage: {},
  profileImage: {},
  details: {},
  interest: {},
  chruchInfo: {},
};

app.get("/", (req, res) => {
  res.json(userProfileData);
});

app.listen(port, () => console.log(`server running at port ${port}`));
