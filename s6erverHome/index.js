const { json, urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(json());
app.use(urlencoded({ urlencoded: false, extended: false }));

const homeUsersList = [
  {
    name: "Abraham john",
    id: "1",
    photo:
      "https://i.insider.com/5cb8b133b8342c1b45130629?width=1136&format=jpeg",
  },
  {
    name: "Abraham john",
    id: "2",
    photo:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Abraham john",
    id: "3",
    photo:
      "https://cdn.pixabay.com/photo/2017/08/01/09/41/people-2564026_960_720.jpg",
  },
  {
    name: "Abraham john",
    id: "4",
    photo:
      "https://images.unsplash.com/photo-1562003389-902303a38425?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

app.get("/getSearchUserDetails", (req, res) => {
  res.json(homeUsersList);
});

app.listen(port, () => console.log(`server running at port ${port}`));
