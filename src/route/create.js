module.exports = (app, db) => {
  app.post("/users", async (req, res) => {
    try {
      const { firstName, lastName } = req.body;
      const data = await db.collection("users").insertOne({
        firstName,
        lastName
      });
      res.send(data);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
};
