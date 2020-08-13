import styled from 'styled-components';
import { breakpoints } from '../../theme/Theme';

export const StyledCurrencyDescription = styled.section`
  width: 35vw;
  text-align: center;
  margin: 20px 0;

  @media (max-width: ${breakpoints.medium}) {
    width: 90vw;
  }
`;

export const StyledText = styled.section`
  font-weight: 700;
  font-size: 1.5rem;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${breakpoints.extraSmall}) {
    font-size: 1.4rem;
  }
`;
