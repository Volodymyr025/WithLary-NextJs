import mongoose from "mongoose";

const postUsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      min: 3,
    },
    lastName: {
      type: String,
      require: true,
      min: 3,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      min: 5,
    },
    phone: {
      type: String,
      require: true,
      unique: true,
      min: 10,
      max: 10,
    },
    password: {
      type: String,
      require: true,
      min: 5,
      max: 16,
    },
    confirmPassword: {
      type: String,
      require: true,
      min: 5,
      max: 16,
    },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", postUsersSchema);

export default Users;
