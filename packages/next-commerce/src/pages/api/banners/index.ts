import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  id: string;
  name: string;
  alt: string;
};

function readJsonData() {
  const filePath = path.resolve('data/banner.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  const { method } = req;
  const banners = readJsonData();
  if (method === 'GET') {
    return res.status(200).json([...banners]);
  }
}
