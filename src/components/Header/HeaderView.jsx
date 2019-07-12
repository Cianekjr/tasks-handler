import React from 'react';
import Link from 'next/link';
import {
  Header, HeaderWrapper, LinkLogo, Logo
} from './Header.shards';

export default function HeaderView() {
  return (
    <Header>
      <HeaderWrapper>
        <Link href="/">
          <LinkLogo>
            <Logo src="/static/logo.png" />
          </LinkLogo>
        </Link>
      </HeaderWrapper>
    </Header>
  );
}
