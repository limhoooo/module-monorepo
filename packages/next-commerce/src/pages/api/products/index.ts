import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  products: {
    id: string;
    name: string;
    alt: string;
  };
};

function readJsonData() {
  const filePath = path.resolve('data/products.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { method } = req;
  if (method === 'GET') {
    return res.status(200).json({
      products: readJsonData(),
    });
  }
}
