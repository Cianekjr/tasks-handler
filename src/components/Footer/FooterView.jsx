import React from 'react';
import { Footer, FooterWrapper, Description } from './Footer.shards';

export default function FooterView() {
  return (
    <Footer>
      <FooterWrapper>
        <Description>
          Designed by Mateusz Chrzanowski &copy; 2019
        </Description>
      </FooterWrapper>
    </Footer>
  );
}
