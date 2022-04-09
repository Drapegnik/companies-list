import Head from 'next/head';

import { fetcher } from 'lib/fetcher';
import { CompaniesList } from 'components/companies-list';

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
      <CompaniesList companies={companies} />
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
