import { ProductOptionGroupProps } from '../ProductOptionGroup';
import { ProductOptionProps } from '../ProductOption';
import { findOneById } from '../../utils/product-option-group';
import { firstOption, secondOption, thirdOption } from './testData';

const id = '__ID__';
const name = '__NAME__';

const options: ProductOptionProps[] = [firstOption, secondOption, thirdOption];

const optionGroup: ProductOptionGroupProps = {
  id: id,
  name: name,
  options
};

describe('ProductOptionGroup model', () => {
  it('assigns properties given in the constructor', () => {
    expect(optionGroup.id).toEqual(id);
    expect(optionGroup.name).toEqual(name);
    expect(optionGroup.options).toEqual(options);
  });

  it('static findOneById returns expected ProductOptionGroup', () => {
    const optionGroupA: ProductOptionGroupProps = {
      id: '__ID_A__',
      name: '__NAME_A__',
      options
    };
    const optionGroupB: ProductOptionGroupProps = {
      id: '__ID_B__',
      name: '__NAME_B__',
      options
    };
    const optionGroupC: ProductOptionGroupProps = {
      id: '__ID_C__',
      name: '__NAME_C__',
      options
    };
    const allOptionGroups = [optionGroupA, optionGroupB, optionGroupC];

    const resultOptionGroup = findOneById(optionGroupB.id, allOptionGroups);
    expect(resultOptionGroup).toBe(optionGroupB);
  });
});
