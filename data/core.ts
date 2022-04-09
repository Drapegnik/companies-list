export enum CompanyType {
  Developer = 0,
  Electrical = 1,
  Excavation = 2,
  Plumbing = 3,
}

export interface Option {
  id: string;
  label: string;
}

export const companyTypes = Object.values(CompanyType).reduce<Option[]>((acc, key) => {
  if (!Number.isNaN(+key)) {
    acc.push({ id: `${key}`, label: CompanyType[+key] });
  }
  return acc;
}, []);

export const allCompanyTypes = companyTypes.map(({ id }) => id);

export interface Company {
  id: number;
  name: string;
  logoUrl: string;
  type: CompanyType;
  address: {
    city: string;
    country: string;
    lat: string;
    lng: string;
  };
}
