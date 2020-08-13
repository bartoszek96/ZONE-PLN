import styled from 'styled-components';
import { breakpoints } from '../../theme/Theme';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

export const StyledNav = styled.nav`
  color: ${({ theme }) => theme.secondaryColor};
  background: ${({ theme }) => theme.secondaryBackgroundColor};
  position: sticky;
  z-index: 1000;
  top: 0;
  height: 15vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 3rem;
  font-weight: 700;
  transition: color .5s, background .5s;
  border-bottom: 3px solid ${({ theme }) => theme.borderColor};

  & a {
    color: ${({ theme }) => theme.secondaryColor};
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 1.5rem;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.borderColor};
`;

export const StyledSwitch = withStyles({
  switchBase: {
    color: '#36454f',
    '&$checked': {
      color: 'white',
    },
    '&$checked + $track': {
      backgroundColor: 'white',
    },
  },
  checked: {},
  track: {},
})(Switch);
