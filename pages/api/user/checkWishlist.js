import connectMongoDB from "@/lib/mongoDB";
import Wishlists from "@/models/wishlists";
import { useSession } from 'next-auth/react';


async function  handler(req, res) {

 const data = req.body

  await connectMongoDB();
  const wishlistdata = await Wishlists.countDocuments({uid: data.uid,pid:data.pid});
  console.log(wishlistdata);
  return res.status(200).json({ wishlistdata });
}

export default handler;