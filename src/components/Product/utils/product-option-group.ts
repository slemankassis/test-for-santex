import { ProductOptionProps } from '../types/ProductOption';

const findOneById = (id: string, optionGroupsList: ProductOptionProps[]) =>
  optionGroupsList.find(
    (optionGroup: ProductOptionProps) => optionGroup.id === id
  );

export { findOneById };
