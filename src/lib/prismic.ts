import Prismic from 'prismic-javascript';
import { DefaultClient } from 'prismic-javascript/types/client';

export const apiEndpoint =
  'https://andredezzy-devcommerce.cdn.prismic.io/api/v2';

export const client = (req = null): DefaultClient => {
  const options = req ? { req } : null;

  return Prismic.client(apiEndpoint, options);
};
