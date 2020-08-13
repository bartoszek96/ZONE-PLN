import styled from 'styled-components';
import { breakpoints } from '../../theme/Theme';

export const StyledHome = styled.main`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  transition: color .3s, background .3s;
  min-height: 85vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.header`
  color: ${({ theme }) => theme.color};
  margin: 10px;
  font-weight: 700;
  font-size: 2rem;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 1.5rem;
  }
`;

export const StyledDiv = styled.div`
  text-align: justify;
  padding: 20px;
  font-size: 2rem;

  @media (max-width: ${breakpoints.medium}) {
    text-align: center;
    padding: 10px;
    font-size: 1.5rem;
  }
`;
