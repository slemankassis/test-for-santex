import { AssetProps } from './Asset';
import { ProductOptionGroupProps } from './ProductOptionGroup';
import { ProductVariantProps } from './ProductVariant';

export type ProductProps = {
  id: string;
  name: string;
  description: string;
  variants: ProductVariantProps[];
  optionGroups: ProductOptionGroupProps[];
  assets: AssetProps[];
  featuredAsset: AssetProps | null;
};
