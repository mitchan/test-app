import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { comparePasswords, createJWT } from "../../lib/auth";
import { db } from "../../lib/db";

export default async function signin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(400).json({ error: `invalid method: ${req.method}` });
    return;
  }

  if (!process.env.AUTH_COOKIE) {
    throw new Error(`You must set process.env.AUTH_COOKIE`);
  }

  const user = await db.user.findFirst({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    res.status(401).json({ message: `Unauthorized` });
    return;
  }

  const isUser = await comparePasswords(req.body.password, user.password);

  if (isUser) {
    const jwt = await createJWT(user);

    res.setHeader(
      "Set-Cookie",
      serialize(process.env.AUTH_COOKIE, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    res.status(201);
    res.json({});
    return;
  }
  res.status(401);
  res.json({ message: `Unauthorized` });
}
