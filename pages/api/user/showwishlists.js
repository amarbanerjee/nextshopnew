import connectMongoDB from "@/lib/mongoDB";
import Wishlists from "@/models/wishlists";
//import { useSession } from 'next-auth/react';


async function  handler(req, res) {

  const data = req.body;
  //const { data: session } = useSession();
  const uid = data.uid;
  console.log("User Id",uid);

  await connectMongoDB();
  const wishlistdata = await Wishlists.find({uid: uid});
  console.log(wishlistdata);
  return res.status(200).json({ wishlistdata });
}

export default handler;