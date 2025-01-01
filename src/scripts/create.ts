import bcrypt from "bcrypt";

const password = "wmzcl1gpt@@@";

bcrypt
  .hash(password, 10)
  .then((hash) => console.log(hash))
  .catch((err) => console.log(err));
