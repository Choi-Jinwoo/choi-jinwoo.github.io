import React from 'react';
import useSiteMetaData from '../../hooks/useSiteMetaData';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.header`
  padding: 32px;

  @media ${props => props.theme.device.mobile} {
    padding: 16px 8px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  width: ${props => props.theme.inner.desktop};
  @media ${props => props.theme.device.tablet} {
    width: ${props => props.theme.inner.tablet};
  }

  @media ${props => props.theme.device.mobile} {
    width: ${props => props.theme.inner.mobile};
  }
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
    to: 'https://github.com/Choi-Jinwoo',
    name: '소개',
  },
];

type Props = {
  path: string;
};

const Header = ({ path }) => {
  const { title, description } = useSiteMetaData();

  const menuItems = MENUS.map(menu => (
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
            <Menus>{menuItems}</Menus>
          </MenuWrapper>
        </InnerItem>
      </Inner>
    </Container>
  );
};

export default Header;
