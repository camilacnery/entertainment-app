import type { NextApiRequest, NextApiResponse } from "next";
import { getHomeRails } from "@/services/rails";
import { IRail } from "@/domain/Rail";

type Data = {
  homeRails: IRail[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const homeRails = await getHomeRails();
  res.status(200).json({ homeRails });
}
