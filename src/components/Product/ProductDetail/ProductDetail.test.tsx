import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import {
  optionGroupsList,
  product,
  variant
} from '../types/__TESTS__/testData';

describe('ProductDetail component', () => {
  it('renders product name once', async () => {
    const renderResult = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductDetail product={product} />
      </MockedProvider>
    );

    const elements = await renderResult.findAllByText(product.name);
    expect(elements.length).toEqual(1);
  });

  it('renders description once', async () => {
    const renderResult = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductDetail product={product} />
      </MockedProvider>
    );

    const elements = await renderResult.findAllByText(product.description);
    expect(elements.length).toEqual(1);
  });

  it('renders a label for each product option group', async () => {
    const renderResult = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductDetail product={product} />
      </MockedProvider>
    );

    for (let i in optionGroupsList) {
      const optGroup = optionGroupsList[i];
      const elements = await renderResult.findAllByText(optGroup.name);
      expect(elements.length).toEqual(1);
    }
  });

  it('renders the price of the active variant', async () => {
    const renderResult = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductDetail product={product} />
      </MockedProvider>
    );

    const elements = await renderResult.findAllByText(`$ ${variant.price}`);
    expect(elements.length).toEqual(1);
  });
});
