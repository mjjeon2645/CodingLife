import styled, { css } from 'styled-components';

import Button from './Bwitch';

const PrimaryButton = styled(Button)`
  background: ${(props) => props.theme.colors.primary};

  ${(props) => props.active && css`
  background: ${props.theme.colors.primary};
  `}
`;

export default PrimaryButton;
