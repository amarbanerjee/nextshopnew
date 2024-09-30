import connectMongoDB from "@/lib/mongoDB";
import Wishlists from "@/models/wishlists";




async function handler(req,res) {
  
  //const formData = await req.FormData(); 
  //const file = formData.get('file')
  
  const data = req.body
  //const file = da;

  console.log("Request",data);
  await connectMongoDB();
  await Wishlists.create(data);
  return res.status(200).json(
    { message: "Added to wishlist successfully" }
  );
}



export default handler;
