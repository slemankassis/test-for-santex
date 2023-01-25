import { FC, useState } from 'react';

import useAddProduct from '../hooks/useAddProduct';
import { ProductVariantOptionProps } from '../types/ProductVariantOption';
import { ProductOptionProps } from '../types/ProductOption';
import { ProductOptionGroupProps } from '../types/ProductOptionGroup';
import {
  Container,
  Title,
  ImageStyled,
  Description,
  FooterFormContainer,
  Price,
  QuantityInput,
  AddButton,
  OptionGroup,
  OptionGroupTitle,
  OptionsList,
  Option,
  ActiveOption,
  ErrorMessageStyled
} from './styled';
import { getVariantWithNewOption } from '../utils/product';
import { ProductProps } from '../types/Product';

interface ProductDetailProps {
  product: ProductProps;
}

const ProductDetail: FC<ProductDetailProps> = (props) => {
  const { id, featuredAsset, name, description, variants, optionGroups } =
    props.product;
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState(variants[0]);

  const { addProduct, error, loading } = useAddProduct();

  const changeActiveOption = (newActiveOption: ProductOptionProps) => {
    setActiveVariant(
      getVariantWithNewOption(
        activeVariant,
        newActiveOption,
        variants,
        optionGroups
      )!
    );
  };

  return (
    <Container>
      <Title>
        {featuredAsset && (
          <ImageStyled
            src={featuredAsset.source}
            width={featuredAsset.width}
            height={featuredAsset.height}
          />
        )}
      </Title>
      <h1>{name}</h1>
      <Description>{description}</Description>
      {optionGroups.map((optionGroup: ProductOptionGroupProps) => {
        const optionsItems = optionGroup.options.map(
          (option: ProductOptionProps) => {
            if (
              activeVariant?.options.some(
                (variantOption: ProductVariantOptionProps) =>
                  variantOption.id === option.id
              )
            ) {
              return (
                <ActiveOption key={`option-item-${id}-${option.id}`}>
                  {option.name}
                </ActiveOption>
              );
            }

            return (
              <Option
                key={`option-item-${id}-${option.id}`}
                onClick={() => changeActiveOption(option)}
              >
                {option.name}
              </Option>
            );
          }
        );
        return (
          <OptionGroup key={`option-group-${id}-${optionGroup.id}`}>
            <OptionGroupTitle>{optionGroup.name}</OptionGroupTitle>
            <OptionsList>{optionsItems}</OptionsList>
          </OptionGroup>
        );
      })}
      <FooterFormContainer>
        <Price>$&nbsp;{activeVariant?.price}</Price>
        <QuantityInput
          type='number'
          min={1}
          max={99}
          step={1}
          value={quantity}
          onChange={(event) => setQuantity(+event.target.value)}
        />
        <AddButton
          onClick={() => addProduct(activeVariant.id, quantity)}
          disabled={!activeVariant || loading}
        >
          {loading ? 'Adding...' : '+ Add'}
        </AddButton>
      </FooterFormContainer>

      {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
    </Container>
  );
};

export default ProductDetail;
