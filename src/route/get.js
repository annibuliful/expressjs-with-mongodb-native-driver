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
};
