// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next/types';

export default (req: NextApiRequest, res: NextApiResponse): void => {
	res.statusCode = 200;
	res.json({ name: 'John Doe' });
};
