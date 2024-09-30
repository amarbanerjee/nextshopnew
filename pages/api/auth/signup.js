import { hashPassword } from '@/lib/auth';
import connectMongoDB from "@/lib/mongoDB";
import Users from "@/models/users";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, password, username } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
    || !username ||
    username.trim().length < 4
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }

  await connectMongoDB();
  //const user = await Users.findOne({ email: credentials.email });

  const existingUser = await Users.findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    //client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  //await Users.findOne({ email: credentials.email });
  console.log("Hashed",hashedPassword);
  const result = await Users.create({
    email: email,
    password: hashedPassword,
    fullname:username,
  });

  await sendMail({
    to: email,
    name: username,
    subject: "Thank you for SignUp with us!! ",
    body: compileWelcomeTemplate(username, "https://www.facebook.com/babyshootinc"),
  });

  res.status(201).json({ message: 'Created user!' });
  //client.close();
}

export default handler;
