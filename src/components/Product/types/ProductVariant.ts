import { ProductVariantOptionProps } from './ProductVariantOption';

export type ProductVariantProps = {
  id: string;
  name: string;
  price: number;
  options: ProductVariantOptionProps[];
};
