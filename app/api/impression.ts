import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    console.log("Impression logged:", req.body);
    res.status(200).json({ message: "Impression logged" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
