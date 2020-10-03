import { GetStaticProps } from 'next';
import React from 'react';

interface IProduct {
  id: string;
  title: string;
}

interface ITop10Props {
  products: IProduct[];
}

const Top10: React.FC<ITop10Props> = ({ products }) => (
  <div>
    <h1>Top 10</h1>

    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  </div>
);

export const getStaticProps: GetStaticProps<ITop10Props> = async () => {
  const response = await fetch('http://localhost:3333/products');
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 5,
  };
};

export default Top10;
