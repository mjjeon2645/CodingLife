import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

const Container = styled.div`
  margin-inline: auto;
  width: 90%;
`;

export default function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
