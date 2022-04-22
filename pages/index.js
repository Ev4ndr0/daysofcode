import Head from "../src/components/Head";

import styled from "styled-components";
import Menu from "../src/components/Menu";
import AssinaturaNewsletter from "../src/components/Assinatura";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function HomePage() {
  return (
    <main>
      <Head title="Home - Site" />      
        <Menu />
        <AssinaturaNewsletter />
      
    </main>
  );
}
