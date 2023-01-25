import styled from 'styled-components';

const Container = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  max-width: 25%;
  box-shadow: 0px 16px 16px 0px #d9d9d9;
  margin: 5px;
`;

const Title = styled.div`
  width: 100%;
  max-height: max-content;
  position: relative;
`;

const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
`;

const Description = styled.p`
  font-family: sans-serif;
  width: 100%;
  margin-bottom: 16px;
`;

const FooterFormContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Price = styled.span`
  font-size: 32px;
  margin: 8px;
`;

const QuantityInput = styled.input`
  background-color: #eaeaea;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  box-shadow: 3px 3px 5px #a4a09d8a;
  margin: 8px;
  padding: 8px;
  font-size: 1.2rem;
  text-align: end;
  max-width: 100px;
`;

const AddButton = styled.button`
  color: white;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

const OptionGroup = styled.div`
  display: inline-block;
  margin: 8px;
`;
const OptionGroupTitle = styled.h4`
  margin-bottom: 0px;
`;
const OptionsList = styled.ul`
  margin-top: 0px;
  list-style: none;
  display: flex;
  padding: 0px;
`;

const Option = styled.li`
  margin: 3px;
  border: 1px solid #ffa500;
  cursor: pointer;
  padding: 3px;
  border-radius: 3px;

  &:hover {
    background-color: #ffa500;
    color: white;
  }
`;

const ActiveOption = styled(Option)`
  background-color: #ffa500;
  color: white;
`;

const ErrorMessageStyled = styled.div`
  background-color: red;
  color: white;
  padding: 8px;
`;

export {
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
};
