import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: {
    type: Number,
    require: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  packageDetails: [String],
});

export default new mongoose.model("Packages", PackageSchema);
