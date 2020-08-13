import styled from 'styled-components';
import { breakpoints } from '../../theme/Theme';

export const StyledChart = styled.section`
  width: 60vw;

  @media (max-width: ${breakpoints.medium}) {
    width: 95vw;
  }
`;
