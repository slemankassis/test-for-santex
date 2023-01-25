import useGetAllProducts from '../hooks/useGetAllProducts';
import ProductDetail from '../ProductDetail';
import { Container } from './styled';

const ProductList = () => {
  const { products, loading, error } = useGetAllProducts();

  if (error) {
    return <>Error</>;
  }

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <Container>
      {products.map((p) => (
        <ProductDetail key={`product-detail-${p.id}`} product={p} />
      ))}
    </Container>
  );
};

export default ProductList;
