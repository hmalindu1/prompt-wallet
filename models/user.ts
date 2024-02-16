/* ==================================== Audit Log ======================================== *
 * Title: Model for the User
 * Author: Hashan
 * Created on: February 16th, 2024
 * Description: User schema for creating a user
/* ======================================================================================== */

import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  }
});

/* First look into the models.Users and see if its there, if not, create it
 * That because this route gets called every time when a connection is established from scratch
 */ 
const User = models.User || model("User", userSchema);

export default User;
