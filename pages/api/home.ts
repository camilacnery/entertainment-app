import type { NextApiRequest, NextApiResponse } from "next";
import { getHomeRails } from "../../src/services/rails";

type Data = {
  homeRails: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const homeRails = await getHomeRails();
  res.status(200).json({ homeRails });
}
