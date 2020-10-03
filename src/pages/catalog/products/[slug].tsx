import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

const AddToCartModal = dynamic(() => import('@/components/AddToCartModal'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Product: React.FC = () => {
  const router = useRouter();

  const [isAddToCardModalVisible, setIsAddToCardModalVisible] = useState(false);

  const handleAddToCart = useCallback(() => {
    setIsAddToCardModalVisible(true);
  }, []);

  return (
    <div>
      <h1>Product {router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to cart</button>

      {isAddToCardModalVisible && <AddToCartModal />}
    </div>
  );
};

export default Product;
