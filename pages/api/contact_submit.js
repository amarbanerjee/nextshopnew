import { compileContactTemplate, sendMail } from "@/lib/mail";
export default async function handler(req, res) {
    const data =  req.body;
    console.log(data);
    //const name = formData.get('name');
    //console.log(formData);
    //const id = await createItem(data)
    await sendMail({
        to: data.email,
        name: data.name,
        subject: data.subject,
        body: compileContactTemplate(data.name, "https://www.facebook.com/babyshootinc"),
      });

    res.status(200).json(data)
  }