import ProductItem from '../productItem/ProductItem';
import { ProductListProps } from './productList.interface';
import { ContainProductList, ContainerProductList } from './productList.style';

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ContainerProductList data-testid='product-list-component'>
      <ContainProductList>
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </ContainProductList>
    </ContainerProductList>
  );
};

export default ProductList;
