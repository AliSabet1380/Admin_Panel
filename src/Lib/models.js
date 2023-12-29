import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 8,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 4,
    },
    passwordConfirm: {
      type: String,
      required: true,
      min: 4,
      validate: {
        validator: function (value) {
          return this.password === value;
        },
        message: "Password And PasswordConfirm Must Be Same!",
      },
    },
    address: String,
    activity: {
      type: String,
      required: true,
      enum: ["active", "notActive"],
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
    },
    img: String,
  },
  { timestamps: true }
);

const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 10,
    },
    price: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    stock: String,
    description: String,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified()) return next();

  if (this.password) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
  }

  next();
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Products || mongoose.model("Products", productsSchema);
