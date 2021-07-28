const { json, urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const ColorThief = require("color-thief");
const colorThieft = new ColorThief();
const oneColor = require("onecolor");

app.use(json());
app.use(urlencoded({ urlencoded: false, extended: false }));

const getBufferReturn = (path) => {
  try {
    const data = fs.readFileSync(path);
    const rgb = colorThieft.getColor(data);
    const rgbCode = "rgb( " + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")"; // 'rgb(r, g, b)'
    const hexValue = oneColor(rgbCode).hex();
    return {
      data: data,
      dominentColor: hexValue,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const userProfileData = {
  name: "Abraham john",
  backgroundImage: getBufferReturn("./images/background.jpg"),
  profileImage: getBufferReturn("./images/profilePic.png"),
  details: {
    sex: "Male",
    age: "24",
    height: "174cm",
    weight: "80kg",
    colorTone: "brown",
    interest: "playing batminton, something like that",
  },

  churchInfo: {
    churchName: "IPC EBEN-EZER CHURCH",
    pastorName: "Saji Joseph",
    organizationName: "IPC",
  },
};

app.get("/", (req, res) => {
  res.json(userProfileData);
});

app.listen(port, () => console.log(`server running at port ${port}`));
