// @ts-nocheck
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
const port = 5000;

const ObjectId = require("mongodb").ObjectId;

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://ishraqmongo:b$C9F7Xti2XYJjZ@cluster0.olxgfnd.mongodb.net/TeammateDB?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("TeammateDB").collection("users");
  console.log("Database Connected");
  app.get("/users", (req, res) => {
    collection.find().toArray((err, items) => {
      console.log("from database ", items);
      res.send(items);
    });
  });

  app.post("/addUser", (req, res) => {
    const newUser = req.body;
    console.log("Adding New User ", newUser);
    collection.insertOne(newUser).then((result) => {
      console.log("inserted count", result.insertedCount);
      res.send(result.insertedCount > 0);
    });
  });
  const filter = { email: "ishraqfatin71@gmail.com" };
  const updateDoc = {
    $set: {
      email: "ishraqfatin81@gmail.com",
    },
  };
  const options = { upsert: false };
  const result = collection
    .updateOne(filter, updateDoc, options)
    .then((res, err) => {
      if (!res.matchedCount) {
        console.log("Need to insert data ");
      }
      //  console.log(err);
    });
  // console.log(result);
  // perform actions on the collection object
  //client.close();
});

app.get("/", (req, res) => {
  res.send("TeamMate server is online");
});
app.listen(port, () => {
  console.log("Listening to Port: ", port);
});
