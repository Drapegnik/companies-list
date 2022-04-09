import type { NextApiRequest, NextApiResponse } from 'next';

interface Company {
  name: string;
}

type Response = Company[];

const companiesHandler = (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json([{ name: 'Test Company' }]);
};

export default companiesHandler;
