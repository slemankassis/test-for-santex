import { belongsToAllOptions } from '../../utils/product-variant';
import {
  notSetVariantOptionsList,
  productVariantOptionsList,
  variant
} from './testData';

const id = '__ID__';
const name = '__NAME__';
const price = 4.44;

describe('ProductVariant model', () => {
  it('assigns properties with provided values in constructor', () => {
    expect(variant.id).toEqual(id);
    expect(variant.name).toEqual(name);
    expect(variant.price).toEqual(price);
    expect(variant.options).toEqual(productVariantOptionsList);
  });

  describe('belongsToAllOptions', () => {
    it('returns true if all the provided options were set to the variant', () => {
      let result = belongsToAllOptions(
        productVariantOptionsList,
        variant.options
      );
      expect(result).toBeTruthy();
      result = belongsToAllOptions([], variant.options);
      expect(result).toBeTruthy();
    });

    it('returns false if any the provided options was not set to the variant', () => {
      let result = belongsToAllOptions(
        notSetVariantOptionsList,
        variant.options
      );
      expect(result).toBeFalsy();
    });

    it('does not modify any property', () => {
      belongsToAllOptions(productVariantOptionsList, variant.options);
      expect(variant.id).toEqual(id);
      expect(variant.name).toEqual(name);
      expect(variant.price).toEqual(price);
      expect(variant.options).toEqual(productVariantOptionsList);
    });
  });
});
