import connectMongoDB from "@/lib/mongoDB";
import Products from "@/models/products";


async function  handler(req, res) {



        if(req.method =="GET")
            {
                const { id } = req.query;
                console.log("EDIT", id);
                await connectMongoDB();
                const product = await Products.findOne({ _id: id });
                return res.status(200).json({ product });
    
            }

  
}

export const config = {
    api: {
      bodyParser: false,
    },
  };

export default handler;