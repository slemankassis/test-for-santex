import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { getAllProductsQuery } from '../../../graphql/queries';
import ProductList from './ProductList';

// #region mocks
const mocks = [
  {
    request: {
      query: getAllProductsQuery
    },
    result: {
      data: {
        products: {
          items: [
            {
              name: 'firstProductName',
              id: '1',
              description:
                'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
              assets: [
                {
                  name: 'derick-david-409858-unsplash.jpg',
                  source:
                    'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
                  width: 1600,
                  height: 1200
                }
              ],
              featuredAsset: {
                name: 'derick-david-409858-unsplash.jpg',
                source:
                  'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
                width: 1600,
                height: 1200
              },
              variants: [
                {
                  id: '1',
                  name: 'Laptop 13 inch 8GB',
                  price: 129900,
                  stockLevel: 'IN_STOCK',
                  options: [
                    {
                      id: '1',
                      groupId: '1',
                      name: '13 inch'
                    },
                    {
                      id: '3',
                      groupId: '2',
                      name: '8GB'
                    }
                  ]
                },
                {
                  id: '2',
                  name: 'Laptop 15 inch 8GB',
                  price: 139900,
                  stockLevel: 'IN_STOCK',
                  options: [
                    {
                      id: '2',
                      groupId: '1',
                      name: '15 inch'
                    },
                    {
                      id: '3',
                      groupId: '2',
                      name: '8GB'
                    }
                  ]
                },
                {
                  id: '3',
                  name: 'Laptop 13 inch 16GB',
                  price: 219900,
                  stockLevel: 'IN_STOCK',
                  options: [
                    {
                      id: '1',
                      groupId: '1',
                      name: '13 inch'
                    },
                    {
                      id: '4',
                      groupId: '2',
                      name: '16GB'
                    }
                  ]
                },
                {
                  id: '4',
                  name: 'Laptop 15 inch 16GB',
                  price: 229900,
                  stockLevel: 'IN_STOCK',
                  options: [
                    {
                      id: '2',
                      groupId: '1',
                      name: '15 inch'
                    },
                    {
                      id: '4',
                      groupId: '2',
                      name: '16GB'
                    }
                  ]
                }
              ],
              optionGroups: [
                {
                  id: '1',
                  name: 'screen size',
                  options: [
                    {
                      id: '1',
                      name: '13 inch'
                    },
                    {
                      id: '2',
                      name: '15 inch'
                    }
                  ]
                },
                {
                  id: '2',
                  name: 'RAM',
                  options: [
                    {
                      id: '4',
                      name: '16GB'
                    },
                    {
                      id: '3',
                      name: '8GB'
                    }
                  ]
                }
              ]
            },
            {
              name: 'secondProductName',
              id: '2',
              description:
                'If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a "computer." It would be Tablet.',
              assets: [
                {
                  name: 'kelly-sikkema-685291-unsplash.jpg',
                  source:
                    'https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg',
                  width: 1600,
                  height: 1067
                }
              ],
              featuredAsset: {
                name: 'kelly-sikkema-685291-unsplash.jpg',
                source:
                  'https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg',
                width: 1600,
                height: 1067
              },
              variants: [
                {
                  id: '5',
                  name: 'Tablet 32GB',
                  price: 32900,
                  stockLevel: 'IN_STOCK',
                  options: [
                    {
                      id: '5',
                      groupId: '3',
                      name: '32GB'
                    }
                  ]
                },
                {
                  id: '6',
                  name: 'Tablet 128GB',
                  price: 44500,
                  stockLevel: 'IN_STOCK',
                  options: [
                    {
                      id: '6',
                      groupId: '3',
                      name: '128GB'
                    }
                  ]
                }
              ],
              optionGroups: [
                {
                  id: '3',
                  name: 'storage',
                  options: [
                    {
                      id: '6',
                      name: '128GB'
                    },
                    {
                      id: '5',
                      name: '32GB'
                    }
                  ]
                }
              ]
            },
            {
              name: 'thirdProductName',
              id: '3',
              description:
                'The Logitech M185 Wireless Optical Mouse is a great device for any computer user, and as Logitech are the global market leaders for these devices, you are also guaranteed absolute reliability. A mouse to be reckoned with!',
              assets: [
                {
                  name: 'oscar-ivan-esquivel-arteaga-687447-unsplash.jpg',
                  source:
                    'https://demo.vendure.io/assets/source/0b/oscar-ivan-esquivel-arteaga-687447-unsplash.jpg',
                  width: 1600,
                  height: 1071
                }
              ],
              featuredAsset: {
                name: 'oscar-ivan-esquivel-arteaga-687447-unsplash.jpg',
                source:
                  'https://demo.vendure.io/assets/source/0b/oscar-ivan-esquivel-arteaga-687447-unsplash.jpg',
                width: 1600,
                height: 1071
              },
              variants: [
                {
                  id: '7',
                  name: 'thirdProductName',
                  price: 1899,
                  stockLevel: 'IN_STOCK',
                  options: []
                }
              ],
              optionGroups: []
            }
          ]
        }
      }
    }
  }
];
// #endregion

describe('ProductList component', () => {
  it('renders one ProductDetail component for each product', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    expect(await screen.findByText('firstProductName')).toBeInTheDocument();
    expect(await screen.findByText('secondProductName')).toBeInTheDocument();
    expect(await screen.findByText('thirdProductName')).toBeInTheDocument();
  });
});
