import Header from './components/Header';
import ProductList from './components/Product/ProductList';
import SubtotalContext from './contexts';
import useStateWithStorage from './components/Product/hooks/useStateWithStorage';

function App() {
  const [total, setSubtotal] = useStateWithStorage('total', 0);
  const [subtotalWithTaxes, setSubtotalWithTaxes] = useStateWithStorage(
    'subtotalWithTaxes',
    0
  );

  const addSale = (saleSubtotal: number, saleSubtotalWithTaxes: number) => {
    setSubtotal((prev: string | null) => (prev ? +prev : 0) + saleSubtotal);
    setSubtotalWithTaxes(
      (prev: string | null) => '' + ((prev ? +prev : 0) + saleSubtotalWithTaxes)
    );
  };

  return (
    <SubtotalContext.Provider
      value={{
        total: +total,
        subtotalWithTaxes: +subtotalWithTaxes,
        addSale
      }}
    >
      <Header />
      <ProductList />
    </SubtotalContext.Provider>
  );
}

export default App;
