export enum CompanyType {
  Developer = 0,
  Electrical = 1,
  Excavation = 2,
  Plumbing = 3,
}

export const numberOfTypes = Object.keys(CompanyType).length / 2;

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
