import { ProductOptionProps } from './ProductOption';
import { ProductOptionGroupProps } from './ProductOptionGroup';

export type ProductVariantOptionProps = ProductOptionProps & {
  optionGroup?: ProductOptionGroupProps;
};
