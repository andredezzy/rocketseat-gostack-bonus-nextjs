import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';

import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';

import SEO from '@/components/SEO';
import { client } from '@/lib/prismic';
import { Title } from '@/styles/pages/Home';

interface IHomeProps {
  recommendedProducts: Document[];
}

const Home: React.FC<IHomeProps> = ({ recommendedProducts }) => (
  <div>
    <SEO title="DevCommerce" image="boost.png" shouldExcludeTitleSuffix />

    <section>
      <Title>Products</Title>

      <ul>
        {recommendedProducts.map(recommendedProduct => (
          <li key={recommendedProduct.id}>
            <Link href={`/catalog/products/${recommendedProduct.uid}`}>
              <a>{PrismicDOM.RichText.asText(recommendedProduct.data.title)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    },
  };
};

export default Home;
