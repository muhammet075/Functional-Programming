const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = process.env.PORT || 5000;
const fetch = require("node-fetch");

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public.css"));

app.use(expressLayouts);
app.set("layout", "./layouts/formaat");
app.set("view engine", "ejs");

app.use(express.json());
var bodyParser = require("body-parser");

app.get("", handleApi, (req, res) => {
  res.render("index");
});

async function handleApi(req, res) {
  const fortniteApi = await fetch(
    "https://fortnite-api.theapinetwork.com/items/list"
  )
    .then((res) => res.json())
    .then((json) => {
      console.log("test");

      //GEGEVENS 0
      const fortniteData = json.data;

      res.render("", {
        fortniteData: fortniteData,
      });
    });
}

app.listen(port, () => {
  console.log("Server aan");
});
