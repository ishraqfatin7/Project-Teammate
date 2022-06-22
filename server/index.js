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
  const teamsCollection = client.db("TeammateDB").collection("teams");
  console.log("Database Connected");
  app.get("/users", (req, res) => {
    collection.find().toArray((err, items) => {
      console.log("from database ", items);
      res.send(items);
    });
  });
  app.post("/users", (req, res) => {
    const user = req.body;
    const query = { username: user.username };
    //console.log(query);

    const isFound = collection.countDocuments(query).then((result) => {
      res.send(result > 0);
    });

    // console.log(isFound);
    //res.send(isFound);
  });

  app.post("/filteredTeams", async (req, res) => {
    const team = req.body;

    const filter = {
      teamCategory: team.teamCategory,
      region: team.region,
      status: team.status,
    };
    //console.log(filter);
    await teamsCollection
      .find(filter)
      .toArray()
      .then((result) => {
        console.log(result);
        res.send(result);
      });
  });

  app.post("/addUser", (req, res) => {
    const newUser = req.body;
    console.log("Adding New User ", newUser);
    collection.insertOne(newUser).then((result) => {
      //  console.log("inserted count", result.insertedCount);
      res.send(result.insertedCount > 0);
    });
  });

  app.put("/addUser", async (req, res) => {
    const user = req.body;
    const filter = { email: user.email };
    const updateDoc = {
      $set: user,
    };
    const options = { upsert: true };
    const result = await collection.updateOne(filter, updateDoc, options);
    res.json(result);
  });

  app.post("/addTeam", async (req, res) => {
    const team = req.body;
    await teamsCollection.insertOne(team).then((result) => {
      res.send(result.insertedCount > 0);
      //res.json(result);
    });
  });
  app.get("/teams", async (req, res) => {
    await teamsCollection.find().toArray((err, items) => {
      //  console.log("from database ", items);
      res.send(items);
    });
  });
  app.get("/users/:id", (req, res) => {
    //   const id = ObjectId(req.params.id);
    console.log(req.params.id);
    const id = req.params.id;
    collection.find({ username: id }).toArray((err, documents) => {
      res.send(documents);
    });
  });
  app.get("/teams/:id", (req, res) => {
    const id = ObjectId(req.params.id);
    console.log(id);
    // console.log(req.params.id);
    //const id = req.params.id;
    teamsCollection.find({ _id: id }).toArray((err, documents) => {
      res.send(documents[0]);
    });
  });

  // const filter = { email: "ishraqfatin71@gmail.com" };
  // const updateDoc = {
  //   $set: {
  //     email: "ishraqfatin81@gmail.com",
  //   },
  // };

  // const result = collection
  //   .updateOne(filter, updateDoc, options)
  //   .then((res, err) => {
  //     if (!res.matchedCount) {
  //       console.log("Need to insert data ");
  //     }
  //     //  console.log(err);
  //   });
  // console.log(result);
  // perform actions on the collection object
  //client.close();

  app.get("/", (req, res) => {
    res.send("TeamMate server is online");
  });
  app.listen(port, () => {
    console.log("Listening to Port: ", port);
  });
});
