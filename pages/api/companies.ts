import casual from 'casual';

import { companyTypes } from 'data/core';

import type { Company } from 'data/core';
import type { NextApiRequest, NextApiResponse } from 'next';

type Companies = Company[];

const total = 15;
const companies: Companies = Array.from({ length: total }).map((_, id) => ({
  id,
  name: casual.company_name,
  logoUrl: `https://robohash.org/${id}`,
  type: casual.integer(0, companyTypes.length),
  address: {
    city: casual.city,
    country: casual.country,
    lat: casual.latitude,
    lng: casual.longitude,
  },
}));

const companiesHandler = (req: NextApiRequest, res: NextApiResponse<Companies>) => {
  res.status(200).json(companies);
};

export default companiesHandler;
