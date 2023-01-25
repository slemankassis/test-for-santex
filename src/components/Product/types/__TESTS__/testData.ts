import { AssetProps } from '../../types/Asset';
import { ProductVariantProps } from './../ProductVariant';
import { ProductVariantOptionProps } from '../../types/ProductVariantOption';
import { ProductOptionGroupProps } from './../ProductOptionGroup';
import { ProductOptionProps } from '../../types/ProductOption';
import { ProductProps } from '../Product';

const firstOption: ProductOptionProps = {
  id: '__ID_1__',
  name: '__NAME_1__'
};
const secondOption: ProductOptionProps = {
  id: '__ID_2__',
  name: '__NAME_2__'
};
const thirdOption: ProductOptionProps = {
  id: '__ID_3__',
  name: '__NAME_3__'
};

const options: ProductOptionProps[] = [firstOption, secondOption, thirdOption];

const optionGroup: ProductOptionGroupProps = {
  id: '__ID_4__',
  name: '__NAME_4__',
  options
};
const productVariantOption: ProductVariantOptionProps = {
  id: '__ID_5__',
  name: '__NAME_5__',
  optionGroup
};
const productVariantOptionsList = [productVariantOption];

const variant: ProductVariantProps = {
  id: '__ID__',
  name: '__NAME__',
  price: 4.44,
  options: productVariantOptionsList
};
const variantsList = [variant];

const notSetProductOption: ProductOptionProps = {
  id: '__ID__',
  name: '__NAME__'
};

const optionGroupsList = [optionGroup];

const notSetProductVariantOption: ProductVariantOptionProps = {
  id: '__ID_7__',
  name: '__NAME_7__',
  optionGroup
};

const notSetVariantOptionsList = [notSetProductVariantOption];

const assetsList: AssetProps[] = [];

const product: ProductProps = {
  id: '__ID__',
  name: '__NAME__',
  description: '__DESCRIPTION__',
  variants: variantsList,
  optionGroups: optionGroupsList,
  assets: assetsList,
  featuredAsset: null
};
export {
  firstOption,
  secondOption,
  thirdOption,
  options,
  optionGroup,
  productVariantOption,
  productVariantOptionsList,
  variant,
  variantsList,
  optionGroupsList,
  notSetVariantOptionsList,
  product,
  notSetProductOption
};
