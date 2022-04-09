import { CompanyType } from 'data/core';

import type { Company } from 'data/core';

interface Props {
  data: Company;
}

export const CompanyCard: React.FC<Props> = ({ data }) => {
  const {
    id,
    name,
    address: { city },
    type,
  } = data;

  return (
    <li key={id}>
      {name} - {city} - {CompanyType[type]}
    </li>
  );
};
