import { useMutation } from '@apollo/client';
import { useCallback, useContext } from 'react';
import SubtotalContext from '../../../contexts';
import { addProductMutation } from '../../../graphql/mutations';

interface UseAddProductReturnType {
  loading: boolean;
  error: string | undefined;
  addProduct: (productVariantId: string, quantity: number) => void;
}

export default function useAddProduct(): UseAddProductReturnType {
  const [addProductFromMutation, { data, error, loading }] =
    useMutation(addProductMutation);
  const { addSale } = useContext(SubtotalContext);

  const addProduct = useCallback(
    async (productVariantId: string, quantity: number) => {
      const result = await addProductFromMutation({
        variables: {
          productVariantId: productVariantId,
          quantity: quantity
        }
      });

      if (result.data) {
        addSale(
          result.data.addItemToOrder.subTotal,
          result.data.addItemToOrder.subTotalWithTax
        );
      }
    },
    [addProductFromMutation, addSale]
  );

  let errorMessage: string | undefined;
  if (data && !loading) {
    if (
      data.OrderModificationError ||
      data.OrderLimitError ||
      data.NegativeQuantityError ||
      data.InsufficientStockError
    ) {
      errorMessage = data.message;
    }
  } else if (error) {
    errorMessage = error.message;
  }

  return {
    loading,
    error: errorMessage,
    addProduct
  };
}
