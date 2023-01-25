import { getVariantWithNewOption } from '../../utils/product';
import {
  firstOption,
  optionGroupsList,
  product,
  variant,
  variantsList,
  notSetProductOption
} from './testData';

describe('Product model', () => {
  describe('getVariantWithNewOption method', () => {
    it('if the variant exists, returns the one that has the same options.', () => {
      const resultVariant = getVariantWithNewOption(
        variant,
        variant.options[0],
        variantsList,
        optionGroupsList
      );
      expect(resultVariant).toBe(variant);
    });

    it('if the variant does not exist, returns undefined', () => {
      // Act
      const resultVariant = getVariantWithNewOption(
        variant,
        notSetProductOption,
        variantsList,
        optionGroupsList
      );
      // Assert
      expect(resultVariant).toBeUndefined();
    });
  });
});
