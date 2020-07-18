const express = require("express");
const cors = require("cors");
const faker = require("faker");
const app = express();
const Port = 4000;
app.use(cors());
app.get("/users/", (req, res) => {
  const users = [];
  for (let i = 1; i <= 10; i++) {
    users.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country(),
    });
  }
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    phone: faker.phone.phoneNumber(),
    country: faker.address.country(),
  });
});

//Listining Port
app.listen(Port, () => {
  console.log(`Server is runnning on Port: ${Port}`);
});
