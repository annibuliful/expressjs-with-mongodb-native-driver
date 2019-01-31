const ObjectId = require("mongodb").ObjectId;
module.exports = (app, db) => {
  app.delete("/users", async (req, res) => {
    try {
      await db.collection("users").deleteMany();
      res.send("Deleted!");
    } catch (e) {
      res.status(500).send(e);
    }
  });

  app.delete("/users/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      await db.collection("users").deleteOne({ _id: ObjectId(userId) });
      res.send("deleted!");
    } catch (e) {
      res.status(500).send(e);
    }
  });
};
