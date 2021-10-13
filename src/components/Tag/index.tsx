import React from 'react';
import styled, { css } from 'styled-components';

type Sizes = 'medium' | 'small';

type ContainerProps = {
  size: Sizes;
};

const Container = styled.span<ContainerProps>`
  display: inline-block;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.gray1};
  color: ${props => props.theme.colors.gray7};

  font-size: ${props => props.theme.sizes.small};

  ${props =>
    props.size === 'medium' &&
    css`
      font-size: ${props => props.theme.sizes.regular};
    `}
`;

type Props = {
  tag: string;
  size?: Sizes;
};

const Tag = ({ tag, size = 'small' }: Props) => (
  <Container size={size}>#{tag}</Container>
);

export default Tag;
