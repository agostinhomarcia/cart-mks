'use client';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Footer from '../../components/Footer/footer';
import ProductList from '../../components/ProductList/productList';
import Header from '../../components/header/header';
import Loading from '../../components/loading/loading';
const URL =
  'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC';
export default function Home() {
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  const { data, isLoading, isError } = useQuery('products', async () => {
    const response = await fetch(`${URL}`);
    return response.json();
  });

  const products = data?.products || [];

  setTimeout(() => {
    setLoadingSkeleton(false);
  }, 2200);

  return (
    <>
      {isLoading || loadingSkeleton ? (
        <Loading products={products.length} />
      ) : (
        <>
          <Header data-testid='header-component' />
          <ProductList
            products={products}
            data-testid='product-list-component'
          />
          <Footer />
        </>
      )}
    </>
  );
}
