const ObjectId = require("mongodb").ObjectId;
module.exports = (app, db) => {
  app.get("/users", async (req, res) => {
    try {
      const data = await db
        .collection("users")
        .find({})
        .toArray();
      res.send(data);
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  });

  app.get("/users/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const data = await db
        .collection("users")
        .findOne({ _id: ObjectId(userId) });
      res.send(data);
    } catch (e) {
      res.status(500).send(e);
    }
  });
};
