import { ProductVariantOptionProps } from '../types/ProductVariantOption';
import { ProductOptionProps } from '../types/ProductOption';

const belongsToAllOptions = (
  allOptions: ProductOptionProps[],
  options: ProductVariantOptionProps[]
) => {
  const thisOptionsIds = options.map((opt) => opt.id);
  return allOptions.every((opt) => thisOptionsIds.includes(opt.id));
};

export { belongsToAllOptions };
