import styled, { css } from 'styled-components';

import { useBoolean } from 'usehooks-ts';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
}

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? 'button',
}))<ButtonProps>`
    background: '#FFF';
    color: '#000';
    border: 1px soid #888;

  ${(props) => props.active && css`
    background: #00F;
    color: #FFF;
`}
`;

export default function Switch() {
  const { value: active, toggle } = useBoolean(false);

  return (
    <Button type="submit" onClick={toggle} active={active}>
      On/Off
    </Button>
  );
}
