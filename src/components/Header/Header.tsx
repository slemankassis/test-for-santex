import { useContext } from 'react';

import context from '../../contexts';
import { Container, CartStyled, Value } from './styled';

const Header = () => {
  const { total, subtotalWithTaxes } = useContext(context);

  return (
    <Container>
      <img
        src='https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png'
        alt='logo'
      />
      <CartStyled>
        <Value>Total $ {total}</Value>
        <Value>Total with taxes $ {subtotalWithTaxes}</Value>
      </CartStyled>
    </Container>
  );
};

export default Header;
