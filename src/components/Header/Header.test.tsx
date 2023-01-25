import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders logo once', async () => {
    const renderResult = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Header />
      </MockedProvider>
    );

    const logos = await renderResult.findAllByAltText('logo');
    expect(logos.length).toEqual(1);
  });
});
