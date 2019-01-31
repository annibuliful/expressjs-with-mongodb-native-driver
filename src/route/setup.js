module.exports = (app, db) => {
  app.get("/setup", async (req, res) => {
    try {
      await db.createCollection("users", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["firstName", "lastName"],
            properties: {
              firstName: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              lastName: {
                bsonType: "string",
                description: "must be a string and is required"
              }
            }
          }
        }
      });
      res.send("Create DB!");
    } catch (e) {
      console.log(e);
      res.status(500).send("cannot Create");
    }
  });
};
