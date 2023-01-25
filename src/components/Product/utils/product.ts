import { ProductVariantOptionProps } from '../types/ProductVariantOption';
import { ProductOptionProps } from '../types/ProductOption';
import { ProductVariantProps } from '../types/ProductVariant';
import { belongsToAllOptions } from './product-variant';
import { ProductOptionGroupProps } from '../types/ProductOptionGroup';

const getVariantWithNewOption = (
  referenceVariant: ProductVariantProps,
  newOption: ProductOptionProps,
  variants: ProductVariantProps[],
  optionGroups: ProductOptionGroupProps[]
): ProductVariantProps | undefined => {
  const optionGroup = getOptionGroupFromOption(newOption, optionGroups);
  const otherOptions: ProductOptionProps[] = referenceVariant.options.filter(
    (option: ProductVariantOptionProps) =>
      option.optionGroup?.id !== optionGroup?.id
  );
  const allOptions = [...otherOptions, newOption];
  return variants.find((variant: ProductVariantProps) =>
    belongsToAllOptions(allOptions, variant.options)
  );
};

const getOptionGroupFromOption = (
  option: ProductOptionProps,
  optionGroups: ProductOptionGroupProps[]
): ProductOptionGroupProps | undefined => {
  return optionGroups.find((optionGroup: ProductOptionGroupProps) =>
    optionGroup.options.some((opt: ProductOptionProps) => opt.id === option.id)
  );
};

export { getVariantWithNewOption };
