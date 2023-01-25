import { ProductOptionProps } from '../ProductOption';

const id = '__ID__';
const name = '__NAME__';

const productOption: ProductOptionProps = { id: id, name: name };

describe('ProductOption model', () => {
  it('assigns properties given in the constructor', () => {
    expect(productOption.id).toEqual(id);
    expect(productOption.name).toEqual(name);
  });
});
