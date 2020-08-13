import styled from 'styled-components';
import { breakpoints } from '../../theme/Theme';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

export const StyledCurrencyConverter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const StyledCodes = styled.section`
  font-weight: 700;
  font-size: 2rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input {
    width: 30vw;
    font-size: 1.5rem;
    border: 3px solid ${({ theme }) => theme.borderColor};
    padding: 2px;
    border-radius: 10px;
    margin: 3px 0;
    color: ${({ theme }) => theme.secondaryColor};
    background: ${({ theme }) => theme.secondaryBackgroundColor};
    font-weight: 700;
    text-align: center;

    @media (max-width: ${breakpoints.medium}) {
      width: 80vw;
    }
  }
`;

export const StyledButton = styled.button`
  width: 15vw;
  cursor: pointer;
  font-size: 1.3rem;
  border: 3px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  margin: 3px 0;
  padding: 2px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryColor};
  background: ${({ theme }) => theme.secondaryBackgroundColor};
  transition: transform .5s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 50vw;
  }
`;

export const StyledResult = styled.section`
  font-size: 1.2rem;
  margin: 10px 0;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.extraSmall}) {
    font-size: 1.2rem;
  }
`;

export const StyledSwitch = withStyles({
  switchBase: {
    color: '#ffd700',
    '&$checked': {
      color: '#ffd700',
    },
    '&$checked + $track': {
      backgroundColor: '#36454f',
    },
  },
  checked: {},
  track: {},
})(Switch);
