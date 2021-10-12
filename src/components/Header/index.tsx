import React from 'react';
import useSiteMetaData from '../../hooks/useSiteMetaData';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.header`
  padding: 32px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.theme.inner.desktop};
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.medium};
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.gray6};
  margin-top: 8px;
`;

const InnerItem = styled.div``;

const MenuWrapper = styled.nav``;

const Menus = styled.ul`
  display: flex;

  & > * + * {
    margin-left: 12px;
  }
`;

type MenuProps = {
  selected: boolean;
};

const Menu = styled.li<MenuProps>`
  ${props =>
    props.selected
      ? css`
          color: ${props => props.theme.colors.black};
        `
      : css`
          color: ${props => props.theme.colors.gray4};
        `}

  &:hover {
    color: ${props => props.theme.colors.gray6};
  }
`;

const MENUS = [
  {
    to: '/',
    name: '블로그',
  },
  {
    to: '/about',
    name: '소개',
  },
];

type Props = {
  path: string;
};

const Header = ({ path }) => {
  const { title, description } = useSiteMetaData();

  const MenuItems = MENUS.map(menu => (
    <Link to={menu.to} key={menu.to}>
      <Menu selected={path === menu.to}>{menu.name}</Menu>
    </Link>
  ));

  return (
    <Container>
      <Inner>
        <InnerItem>
          <Link to="/">
            <Title>{title}</Title>
          </Link>
          <Description>{description}</Description>
        </InnerItem>

        <InnerItem>
          <MenuWrapper>
            <Menus>{MenuItems}</Menus>
          </MenuWrapper>
        </InnerItem>
      </Inner>
    </Container>
  );
};

export default Header;
