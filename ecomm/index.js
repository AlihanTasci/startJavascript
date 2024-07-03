import express from "express";
import bodyParser from "body-parser";
import { default as usersRepo } from "./repositories/users.js";
import cookieSession from "cookie-session";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["aldfkmvaldfkv"]
  })
);

app.get("/", (req, res) => {
  res.send(`
  <div>
    Your id is ${req.session.userId}
    <form method="POST">
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <input name="passwordConfirmation" placeholder="password confirmation" />
      <button> Sign Up </button>
    </form>
  </div>
  `);
});

app.post("/", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send("Email in use");
  }

  if (password !== passwordConfirmation) {
    return res.send("Password must match");
  }
  const user = await usersRepo.create({ email, password });
  req.session.userId = user.id;
  res.send("Account Created");
});
app.listen(3000, () => {
  console.log("Listening...");
});
