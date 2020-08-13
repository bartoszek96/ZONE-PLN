import styled from 'styled-components';
import { breakpoints } from '../../theme/Theme';

export const StyledErrorPage = styled.main`
  color: ${({ theme }) => theme.secondaryColor};
  background: ${({ theme }) => theme.secondaryBackgroundColor};
  text-align: center;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 2rem;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${breakpoints.extraSmall}) {
    font-size: 1rem;
  }
`;
