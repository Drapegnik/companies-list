import Image from 'next/image';
import cn from 'classnames';

import { CompanyType } from 'data/core';

import type { Company } from 'data/core';

interface Props {
  data: Company;
}

export const CompanyCard: React.FC<Props> = ({ data }) => {
  const {
    name,
    logoUrl,
    address: { city, country, lat, lng },
    type,
  } = data;

  return (
    <div className="pt-2">
      <div className="rounded-xl bg-gray-50 flex w-full max-w-lg p-2 border border-gray-100">
        <div className="relative flex w-1/5 mr-4">
          <Image
            src={logoUrl}
            alt={name}
            layout="fill"
            width={300}
            height={300}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <h3 className="mb-1 text-xl font-semibold leading-none">{name}</h3>
          <span
            className={cn(
              'w-min inline-block px-2 py-1 text-xs font-semibold uppercase rounded mb-1',
              {
                'text-pink-900 bg-pink-200': type === CompanyType.Plumbing,
                'text-blue-900 bg-blue-200': type === CompanyType.Developer,
                'text-green-900 bg-green-200': type === CompanyType.Electrical,
                'text-yellow-900 bg-yellow-200': type === CompanyType.Excavation,
              }
            )}
          >
            {CompanyType[type]}
          </span>
          <p className="md:text-lg text-sm text-gray-500">
            <span>
              {city}, {country},
            </span>
            <a
              href={`http://www.google.com/maps/place/${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'📍'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
