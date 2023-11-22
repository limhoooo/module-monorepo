import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
type Product = {
  id: string;
  title: string;
  price: string;
  grade: number;
  imagePath: string;
  alt: string;
  new: boolean;
  best: boolean;
  sale: boolean;
};
function readJsonData() {
  const filePath = path.resolve('data/products.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>,
) {
  const { method } = req;
  if (method === 'GET') {
    const products: Product[] = readJsonData();
    const newProducts = products.filter(item => item.new);

    return res.status(200).json([...newProducts]);
  }
}
