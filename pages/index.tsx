import Head from 'next/head';

import { fetcher } from 'lib/fetcher';
import { CompanyCard } from 'components/company-card';

import type { Company } from 'data/core';
import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  companies: Company[];
}

const Home: NextPage<Props> = ({ companies }) => (
  <div>
    <Head>
      <title>Companies List</title>
      <meta name="description" content="List of construction companies" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <ul>
        {companies.map(c => (
          <CompanyCard key={c.id} data={c} />
        ))}
      </ul>
    </main>
  </div>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const companies = await fetcher<Company[]>(req, `/api/companies`);

  return {
    props: {
      companies,
    },
  };
};

export default Home;
