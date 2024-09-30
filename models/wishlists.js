import mongoose, { Schema } from "mongoose";

const wishlistSchema = new Schema(
  {
    uid: String,
    pid: String,
    product_name: String,
    image: String,
    price:Number
  },
  { timestamps: true }
);

const Wishlists =
  mongoose.models.Wishlists || mongoose.model("Wishlists", wishlistSchema);

export default Wishlists;
