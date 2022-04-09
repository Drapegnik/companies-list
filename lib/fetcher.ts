import type { GetServerSidePropsContext } from 'next';

export const fetcher = async <T>(req: GetServerSidePropsContext['req'], url: string) => {
  const protocol = (req.headers['x-forwarded-proto'] as string) || 'http';
  const host = req.headers.host as string;
  const baseUrl = `${protocol}://${host}`;

  return fetch(`${baseUrl}${url}`).then(async res => res.json() as Promise<T>);
};
