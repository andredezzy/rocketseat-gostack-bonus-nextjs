import { GetServerSideProps } from 'next';
import React, { useCallback } from 'react';

import SEO from '@/components/SEO';
import { Title } from '@/styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProducts: IProduct[];
}

const Home: React.FC<IHomeProps> = ({ recommendedProducts }) => {
  const handleSum = useCallback(async () => {
    const { sum } = (await import('@/lib/math')).default;

    console.log(sum(2, 2));
  }, []);

  return (
    <div>
      <SEO title="DevCommerce" image="boost.png" shouldExcludeTitleSuffix />

      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => (
            <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
          ))}
        </ul>
      </section>

      <button onClick={handleSum}>Sum!</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recommended`,
  );
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts,
    },
  };
};

export default Home;
