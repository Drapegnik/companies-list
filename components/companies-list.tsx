import { useState } from 'react';

import { CompanyCard } from 'components/company-card';
import { allCompanyTypes, companyTypes } from 'data/core';
import { SearchBar } from 'components/search-bar';

import { CheckboxGroup } from './checkbox-group';

import type { Company } from 'data/core';

interface Props {
  companies: Company[];
}

export const CompaniesList: React.FC<Props> = ({ companies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompanyTypes, setCompanyTypes] = useState(allCompanyTypes);

  return (
    <div className="flex flex-col w-full h-screen max-w-lg px-4 mx-auto">
      <div className="my-4">
        <SearchBar query={searchQuery} setQuery={setSearchQuery} placeholder="Type company name" />
        <CheckboxGroup
          options={companyTypes}
          selected={selectedCompanyTypes}
          setSelected={setCompanyTypes}
        />
      </div>
      <div className="-mt-2 overflow-y-auto">
        {companies
          .filter(
            ({ name, type }) =>
              name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) &&
              selectedCompanyTypes.includes(`${type}`)
          )
          .map(c => (
            <CompanyCard key={c.id} data={c} />
          ))}
      </div>
    </div>
  );
};
