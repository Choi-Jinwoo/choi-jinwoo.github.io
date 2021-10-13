import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  display: inline-block;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.gray1};
  color: ${props => props.theme.colors.gray7};
  font-size: ${props => props.theme.sizes.small};
`;

type Props = {
  tag: string;
};

const Tag = ({ tag }: Props) => <Container>#{tag}</Container>;

export default Tag;
