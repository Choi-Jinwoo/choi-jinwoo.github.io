import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  display: inline-block;
  width: fit-content;
  padding: 8px 4px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.gray2};
  color: ${props => props.theme.colors.gray7};
`;

type Props = {
  tag: string;
};

const Tag = ({ tag }: Props) => <Container>#{tag}</Container>;

export default Tag;
