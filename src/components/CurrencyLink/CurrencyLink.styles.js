import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../theme/Theme';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.secondaryColor};
  background: ${({ theme }) => theme.secondaryBackgroundColor};
  font-size: 1.5rem;
  padding: 10px;
  margin: 5px;
  width: 80vw;
  text-decoration: none;
  font-weight: 700;
  border: solid 3px ${({ theme }) => theme.borderColor};
  display: flex;
  justify-content: space-between;
  transition: transform .5s;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: 1.2rem;
    width: 90vw;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${breakpoints.extraSmall}) {
    font-size: 0.7rem;
  }
`;
