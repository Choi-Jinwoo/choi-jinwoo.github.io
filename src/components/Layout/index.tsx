import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle theme={theme} />
    {children}
  </>
);

export default Layout;
