import styled from 'styled-components';
import { breakpoints } from '../../theme/Theme';

export const StyledCurrency = styled.main`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  transition: color .3s, background .3s;
  min-height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column-reverse;
  }
`;
