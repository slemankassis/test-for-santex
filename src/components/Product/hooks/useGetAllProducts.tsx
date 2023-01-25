import { useQuery } from '@apollo/client';
import { getAllProductsQuery } from '../../../graphql/queries';
import { stringToAssetType, AssetProps } from '../types/Asset';
import { ProductVariantOptionProps } from '../types/ProductVariantOption';
import { ProductOptionProps } from '../types/ProductOption';
import { ProductOptionGroupProps } from '../types/ProductOptionGroup';
import { findOneById } from '../utils/product-option-group';
import { ProductProps } from '../types/Product';

/**
 * @description Creates an asset from the server response.
 * @param assetDataFromServer Server response for an asset.
 * @returns The Asset object.
 */
const createAssetFromResponse = (
  assetDataFromServer?: any
): AssetProps | null => {
  if (assetDataFromServer == null) {
    return null;
  }

  const { name, type, source, width, height } = assetDataFromServer;

  return { name, type: stringToAssetType(type), source, width, height };
};

/**
 * @description Hook that will fetch immediately all products.
 * @returns An object with products fetched, a loading state and
 * an error message if exists.
 */
export default function useGetAllProducts() {
  const { data, loading, error } = useQuery(getAllProductsQuery);

  let products: ProductProps[] = [];
  if (data) {
    products = data.products.items.map((item: any) => {
      const optionGroups = item.optionGroups.map((optionGroup: any) => {
        const options: ProductOptionProps[] = optionGroup.options.map(
          (option: any) => ({ id: option.id, name: option.name })
        );
        return {
          id: optionGroup.id,
          name: optionGroup.name,
          options
        } as ProductOptionGroupProps;
      });

      const variants = item.variants.map((variant: any) => {
        const options: ProductVariantOptionProps[] = variant.options.map(
          (option: any) => ({
            id: option.id,
            name: option.name,
            optionGroup: findOneById(option.groupId, optionGroups)
          })
        );
        return {
          id: variant.id,
          name: variant.name,
          price: variant.price,
          options
        };
      });

      const assets = item.assets.map(createAssetFromResponse);
      let featuredAsset: AssetProps | null = null;
      if (item.featuredAsset) {
        featuredAsset = createAssetFromResponse(item.featuredAsset);
      }

      return {
        id: item.id,
        name: item.name,
        description: item.description,
        variants,
        optionGroups,
        assets,
        featuredAsset
      } as ProductProps;
    });
  }

  return {
    products,
    loading,
    error
  };
}
